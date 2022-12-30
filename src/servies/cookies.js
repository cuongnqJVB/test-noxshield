import cookie from 'js-cookie';

class Cookies {
    get(key, request) {
        if (request) {
            return this._getServer(key, request);
        }
        return this._getClient(key);
    }

    set(key, value) {
        cookie.set(key, value);
    }

    remove(key) {
        cookie.remove(key);
    }

    _getClient(key) {
        return cookie.get(key);
    }

    _getServer(key, request) {
        const { cookies } = request;
        if (cookies) {
            return cookies[key];
        }
        return undefined;
    }

    setWithExpires(key, value, expires) {
        cookie.set(key, value, { expires });
    }
}

export default new Cookies();
