import { CookieStorage } from "@/lib/CookieStorage";
import Storage from "@/lib/Storage";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "sonner";

interface ApiOpts {
  baseURL?: string;
  headers?: any;
  token?: string;
  tokenKey?: string;
}

class Api {
  private xhr: AxiosInstance;
  private maxRetries: number = 100;
  private retryDelay: number = 2000; // 2 second

  constructor(
    opts: ApiOpts = { baseURL: "", headers: {}, tokenKey: "", token: "" }
  ) {
    const apiBaseUrl = process.env.API_BASE_URL;
    const cookie = CookieStorage.get("cookie");
    const token = opts.token || CookieStorage.get(opts.tokenKey || "token");

    const headers = {
      "Content-Type": "application/json; charset=UTF8",
      Authorization: token,
      ...opts.headers,
    };

    if (cookie) headers["X-Custom-Cookie"] = cookie;

    this.xhr = axios.create({
      baseURL: opts.baseURL || apiBaseUrl,
      headers,
    });

    this.xhr.interceptors.request.use((config) => {
      if (config.method === "options") {
        config.headers["Access-Control-Request-Method"] = config.method;
      }
      return config;
    });
  }

  private handleErr = (
    err: any,
    retryCount: number = 0,
    originalRequest: any
  ) => {
    // const systemError = "سیستم در حال بررسی مشکل از سمت سعیده، تا اون موقع پاشو واسه خودت چایی بریز c😊"

    if (err.response) {
      const message = err.response?.data?.message;
      const { status } = err.response;
      switch (true) {
        case status === 400:
          if (message && Array.isArray(message.errors)) {
            message.errors.map((error: any) => {
              toast.error(error.message || error);
            });
          } else if (err.response?.data?.errors?.message) {
            toast.error(err.response?.data?.errors.message);
          } else toast.error("درخواست نامعتبر");
          break;
        case status === 401:
          toast.error("عدم احراز هویت");
          window.location.href = "/auth/login";
          Storage.remove("token");
          Storage.remove("user_info");
          Storage.remove("permissions");
          CookieStorage.delete("token");
          break;
        case status === 403:
          toast.error("دسترسی غیرمجاز");
          if (!["staff"].includes(window.location.pathname)) {
            setTimeout(() => {
              window.location.href = "/crm/react/403";
            }, 2000);
          }
          break;
        case status === 404:
          toast.error("منبع یافت نشد");
          break;
        case status >= 500:
          // toast.error(systemError);
          return this.retryRequest(err, retryCount, originalRequest);
        case status === 0 && err.message.includes("Network Error"):
          // toast.error(systemError);
          return this.retryRequest(err, retryCount, originalRequest);
        default:
          toast.error(message || "خطای ناشناخته");
      }
    } else if (err.request) {
      if (err.message.includes("Network Error")) {
        // toast.error(systemError);
        return this.retryRequest(err, retryCount, originalRequest);
      } else {
        // toast.error(systemError);
        return this.retryRequest(err, retryCount, originalRequest);
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      // toast.error(systemError);
    }

    console.error("API Error:", err);
  };

  private handleRes = (res: AxiosResponse) => {
    const responseCookie = res.data.cookie;
    if (responseCookie) {
      try {
        const existingCookie = Storage.get("cookie") || null;
        const parsedExistingCookie = existingCookie
          ? JSON.parse(existingCookie as string)
          : null;
        const parsedResponseCookie = JSON.parse(responseCookie);

        window.localStorage.setItem("cookie", responseCookie);

        if (parsedExistingCookie) {
          const isEqualCallStatus =
            parsedExistingCookie.callStatus === parsedResponseCookie.callStatus;
          const isEqualGoftinoStatus =
            parsedExistingCookie.goftinoStatus ===
            parsedResponseCookie.goftinoStatus;
          const isEqualHighestRank =
            parsedExistingCookie.highestRank ===
            parsedResponseCookie.highestRank;
          const isEqualroles =
            parsedExistingCookie.roles.length ===
            parsedResponseCookie.roles.length;

          if (
            !isEqualCallStatus ||
            !isEqualGoftinoStatus ||
            !isEqualHighestRank ||
            !isEqualroles
          ) {
            window.location.reload();
            return;
          }
        }
      } catch (error) {
        console.error("Error handling cookie:", error);
      }
    }
  };

  private retryRequest = (
    err: any,
    retryCount: number,
    originalRequest: any
  ) => {
    if (retryCount < this.maxRetries) {
      retryCount++;
      console.log(`Retrying request (${retryCount}/${this.maxRetries})...`);

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(this.xhr(originalRequest));
        }, this.retryDelay * retryCount);
      }).catch((error) => this.handleErr(error, retryCount, originalRequest));
    }

    return Promise.reject(err);
  };

  setToken(token: string): void {
    if (token) {
      this.xhr.defaults.headers.common["Authorization"] = token;
    } else {
      delete this.xhr.defaults.headers.common["Authorization"];
    }
  }

  get(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .get(url, {
          params,
        })
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err, 0, { method: "GET", url, params });
        });
    });
  }

  post(
    url: string,
    params?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .post(url, params, config)
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  put(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .put(url, params)
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  patch(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .patch(url, params)
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }

  delete(url: string, params?: any): Promise<AxiosResponse> {
    return new Promise((resolve, reject) => {
      this.xhr
        .delete(url, { data: params })
        .then((res) => {
          resolve(res);
          this.handleRes(res);
        })
        .catch((err) => {
          reject(err);
          this.handleErr(err);
        });
    });
  }
}

export type { AxiosRequestConfig, AxiosResponse };

export default Api;
