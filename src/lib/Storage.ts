"use client";

class Storage {
  private static instance: Storage;

  private constructor() {}

  static getInstance(): Storage {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }

  set(key: string, value: any): void {
    try {
      if (typeof window !== "undefined") {
        const serializedValue = JSON.stringify(value);
        sessionStorage.setItem(key, serializedValue);
      }
    } catch (error) {
      console.error("Error setting sessionStorage item:", error);
    }
  }

  get<T>(key: string, defaultValue: T | null = null): T | null {
    try {
      if (typeof window !== "undefined") {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      }
      return defaultValue;
    } catch (error) {
      console.error("Error getting sessionStorage item:", error);
      return defaultValue;
    }
  }

  remove(key: string): void {
    try {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem(key);
      }
    } catch (error) {
      console.error("Error removing sessionStorage item:", error);
    }
  }

  clear(): void {
    try {
      if (typeof window !== "undefined") {
        sessionStorage.clear();
      }
    } catch (error) {
      console.error("Error clearing sessionStorage:", error);
    }
  }

  exists(key: string): boolean {
    try {
      if (typeof window !== "undefined") {
        return sessionStorage.getItem(key) !== null;
      }
      return false;
    } catch (error) {
      console.error("Error checking sessionStorage item:", error);
      return false;
    }
  }
}

export default Storage.getInstance();
