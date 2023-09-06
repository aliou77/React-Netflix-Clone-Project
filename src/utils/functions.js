import { useEffect } from "react";

/**
 * 
 * @param {string} name the name of the cookie
 */
export const getCookie = (name) => {
    const cookies = document.cookie.split('; ')
    const value = cookies
        .find(c => c.startsWith(name))
        ?.split('=')[1] // ? => operateur (selement s'il renvoie true et non undefined)
    if (value === undefined) {
        return null
    }
    return decodeURIComponent(value);
}

export const setCookie = (name, value, days = null) => {
    if (days) {
        const date = new Date()
        date.setDate(date.getDate() + days)
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()};`;
    } else {
        document.cookie = `${name}=${encodeURIComponent(value)};`;
    }
}

/**
 * 
 * @param {String} name the name of the cookie
 * @param {String} path the path used by the cookie, where he is created
 */
export const deleteCookie = (name, path) => {
    const date = new Date()
    date.setDate(date.getDate() - 30)
    document.cookie = `${name}=''; expires=${date.toUTCString()};path=${path}`;
}

/**
 * 
 * @param {String} value the email will be check 
 * @returns 
 */
export const goodEmail = (value) => {
    var regex = new RegExp('[A-Za-z0-9]+@(gmail|yahoo)\.(com|fr)', 'gim'); // c'est lui qui ajout les slash (/[]/)
    return regex.test(value)
}

/**
 * this personalised hook will execute the JQuery code just once 
 */
/**
 * 
 * @param {*} callback callback which will reexecuted
 */
export const useReloadCode = (callback) => {
    useEffect(() => callback(), [])
}
