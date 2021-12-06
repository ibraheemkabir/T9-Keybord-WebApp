import {IsValidResponse} from './../common/types';

const CACHE_INTERVAL = 1 * 60 * 1000;

export function store(key: string, value: string) {
    const finalValue = `${value}-${Date.now().toString()}`;
    localStorage.setItem(key, finalValue);
}

export function getItem(key: string) {
    return localStorage.getItem(key);
}

export function isValid(key: string): IsValidResponse {
    const value = localStorage.getItem(key);
    if (value === null) {
        return {
            isValid: false,
        };
    }
    const values = value.split('-');
    const timestamp = Number(values[1]);
    console.log(timestamp)
    if (Number.isNaN(timestamp)) {
        console.log(timestamp,'oss')

        return {
            isValid: false,
        };
    }
    const date = new Date(timestamp);
    if (date.toString() === 'Invalid Date') {
        console.log(timestamp,'oss2')

        return {
            isValid: false,
        };
    }
    console.log((Date.now() - date.getTime()),CACHE_INTERVAL,date.toUTCString())
    if ((Date.now() - date.getTime()) < CACHE_INTERVAL) {
        return {
            isValid: true,
            value: values[0],
        };
    }
    localStorage.removeItem(key);
    return {
        isValid: false,
    };
}