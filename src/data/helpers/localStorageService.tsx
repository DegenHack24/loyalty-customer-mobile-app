import { DataKey } from "../const/localStorageConst";

const setData = (dataKey: DataKey, dataValue: string) => {
    return localStorage.setItem(dataKey, dataValue);
}

const getData = (dataKey: DataKey) => {
    return localStorage.getItem(dataKey);
}

export {
    setData,
    getData
}