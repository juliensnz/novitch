import React, { useContext } from "react";
import JsonData from "./data.json";

export const data = JsonData;

export const DataContext = React.createContext(data);

export const useData = (key: string, defaultData: any = "") => {
  const data = useContext(DataContext);

  return propertyAccessor(key, data, defaultData);
};

const propertyAccessor = (
  key: string,
  data: any,
  defaultData: any = null
): any => {
  const [currentKey, ...otherKeys] = key.split(".");

  if ("" === currentKey && 0 === otherKeys.length) {
    return data;
  }

  if (undefined === data[currentKey]) return defaultData;

  return propertyAccessor(otherKeys.join("."), data[currentKey]);
};
