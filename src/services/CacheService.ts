export default class CacheService {
  // Save data to localStorage
  static saveToLocalStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get data from localStorage
  static getFromLocalStorage<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
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
