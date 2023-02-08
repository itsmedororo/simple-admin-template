import Request from "./Request";

class Api {
    constructor() {
        this.request = new Request();
    }

    /**
     * @param {function} sessionExpiredAction - A redux action which will be dispatch if session is expired
     */
    init({ sessionExpiredAction }) {
        this.request.init({
            sessionExpiredAction,
        });
    }

    // ================================ APIs =================================

    login(data) {
        return this.request.post("/auth/login", null, data);
    }

    logout() {
        return this.request.post("/auth/logout", null, null);
    }

    /**
     * After a successful login, save session id into
     * request object, which will be send in Headers
     */
    setSessionToken(token) {
        this.request.setSessionToken(token);
    }
}

const api = new Api();

export default api;