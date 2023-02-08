const LOCAL_STORAGE_KEYS = {
    token: 'token',
};

export function setToken(value) {
    localStorage.setItem(LOCAL_STORAGE_KEYS.token, value);
}

export function clearToken() {
    localStorage.removeItem(LOCAL_STORAGE_KEYS.token);
}

export function getToken() {
    try {
        return localStorage.getItem(LOCAL_STORAGE_KEYS.token);
    } catch (err) {
        clearToken();
        return null;
    }
}
