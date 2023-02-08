import axios from 'axios';
import { getBuildConfig } from "@config/buildConfig";

/**
 * Provide a layer over the axios library, to
 * configure request parameters before making a HTTP call.
 *
 * NOTE: This class shouln't be used directly,
 * use api object from api.js
 */
class Request {
    constructor() {
        const buildConfig = getBuildConfig();
        // The reason why we are not simply destructuring getBuildConfig
        // is to have clear picture what keys are present in configuration
        this.configuration = {
            baseUrl: buildConfig.baseUrl,
            basePath: buildConfig.basePath,
            apiTimeOverAllowance: buildConfig.apiTimeOverAllowance,
            s3TimeOverAllowance: buildConfig.s3TimeOverAllowance,
        };
    }

    /**
     * Initilization at app start up
     */
    init({
        sessionExpiredAction = () => { },
    }) {
        this.sessionExpiredAction = sessionExpiredAction;
    }

    post(path, params, data, isMultipart = false) {
        return this.send({
            path,
            method: 'POST',
            params,
            data,
            isMultipart,
        });
    }

    put(path, params, data) {
        return this.send({ path, method: 'PUT', params, data });
    }

    get(path, params, data) {
        return this.send({ path, method: 'GET', params, data });
    }

    delete(path, params, data) {
        return this.send({ path, method: 'DELETE', params, data });
    }

    send({
        /**
         * `path` is the api endpoint that will be appended
         * with base_url + root_path, to form complete url
         */
        path,
        /**
         * `method` is the HTTP request method to indicate
         * the desired action to be performed for a given resource
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
         */
        method,
        /**
         * `params` are the URL GET parameters to be appended with the url.
         * Must be a plain object or a URLSearchParams object
         */
        params = {},
        /**
         * `data` is the data to be sent as the request body
         * Only applicable for request methods 'PUT', 'POST', and 'PATCH'
         * When no `transformRequest` is set, must be of one of the following types:
         * - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
         * - Browser only: FormData, File, Blob
         * - Node only: Stream, Buffer
         */
        data,
        /**
         *  true for multipart request
         */
        isMultipart = false,
    }) {
        const url = `${this.configuration.baseUrl}${this.configuration.basePath}${path}`;

        const headers = isMultipart
            ? this.getMultipartHeaders()
            : this.getHeaders();

        const timeout = this.configuration.apiTimeOverAllowance;

        return new Promise((resolve, reject) => {
            axios({
                url,
                method,
                timeout,
                headers,
                params,
                data,
            })
                .then(response => {
                    resolve(response?.data);
                })
                .catch(error => {
                    if (error?.response) {
                        const { status, data: { message } } = error?.response;
                        if (status === 401) {
                            this.handleSessionExpire();
                        }
                        reject(message);
                    }
                    reject();
                });
        });
    }

    getMultipartHeaders() {
        return {};
    }

    getHeaders() {
        const dynamicKeys = this.configuration.token ? { 'Authorization': this.configuration.token, } : {};
        const contentType = 'application/json';
        return {
            'Content-Type': contentType,
            ...dynamicKeys,
        };
    }

    setSessionToken(token) {
        this.configuration.token = token;
    }

    handleSessionExpire() {
        /**
         * Dispatch a redux action, notifying session has expired.
         *
         * This function was attached to request object at the
         * time of "INITIALIZE_APP" process.
         */
        this.sessionExpiredAction();
    }
}

export default Request;