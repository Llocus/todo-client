import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved!);
  return initial || defaultValue;
}


export function removeStorageValue(key: string, item: any) {
    let users =JSON.parse(localStorage.getItem(key)!);
    users = users.filter((user: { cpf: any; }) => user.cpf !== item);
    localStorage.setItem(key, JSON.stringify(users));
    if (users.length === 0) {
        localStorage.removeItem("user");
    }
    return users
}


export function alterStorageValue(key: string, item: any, data: any) {
    let users = JSON.parse(localStorage.getItem(key)!);
    users = users.filter((user: { cpf: any; }) => user.cpf !== item);
    localStorage.setItem(key, JSON.stringify(users));
    const newData = data.concat(...JSON.parse(localStorage.getItem('user')!))
    if (users.length === 0) {
        localStorage.removeItem("user");
    }
    return newData
}

export function createStorageValue(key: string, data: any) {
    const newData = data.concat(...JSON.parse(localStorage.getItem('user')!))
    localStorage.setItem(key, JSON.stringify(newData));
    return newData
}

export const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};