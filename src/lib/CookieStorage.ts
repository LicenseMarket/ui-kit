"use client";

export class CookieStorage {
  private static instance: CookieStorage;

  private constructor() {}

  static getInstance(): CookieStorage {
    if (!CookieStorage.instance) {
      CookieStorage.instance = new CookieStorage();
    }
    return CookieStorage.instance;
  }

  static set(name: string, value: string, days?: number): void {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie =
      name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  static get(name: string): string | null {
    const nameEQ = name + "=";
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(
          cookie.substring(nameEQ.length, cookie.length)
        );
      }
    }
    return null;
  }

  static delete(name: string): void {
    this.set(name, "", -1);
  }

  static exists(name: string): boolean {
    return this.get(name) !== null;
  }

  static getAll(): { [key: string]: string } {
    const cookies: { [key: string]: string } = {};
    const cookiesList = document.cookie.split(";");

    for (let i = 0; i < cookiesList.length; i++) {
      const cookie = cookiesList[i].trim();
      if (cookie) {
        const [name, value] = cookie.split("=");
        cookies[decodeURIComponent(name)] = decodeURIComponent(value);
      }
    }

    return cookies;
  }

  static clear(): void {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      this.delete(name.trim());
    }
  }
}

export default CookieStorage.getInstance();
