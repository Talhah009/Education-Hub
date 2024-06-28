/**
 * Created By Muhammad Hassaan
 * Date Created 02 June 2023
 */

interface Data {
    [key: string]: any;
  }
  
  export const saveDataToLocalStorage = (key: string, data: Data): void => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const getDataFromLocalStorage = (key: string): Data | null => {
    const storedData = localStorage.getItem(key);
    if (storedData) {
      return JSON.parse(storedData);
    }
    return null;
  };
  
  export const clearDataFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
  };
  
  export const clearAllDataFromLocalStorage = (): void => {
    localStorage.clear();
  };
  