export default class CacheService {
  // Save data to localStorage
  static saveToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static getFromLocalStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? (JSON.parse(data) as T) : null;
  }

  // Remove data from localStorage
  static removeFromLocalStorage(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all localStorage
  static clearLocalStorage(): void {
    localStorage.clear();
  }
}
