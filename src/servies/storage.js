export class Storage {
    static POPUP_VIEWED = 'popup_viewed';
    static PAGE_CONFIG = 'page_config';
    static PAGE_FOOTER = 'page_footer';

    /**
     * Add Storage
     * @param {*} key
     * @param {*} value
     */
    static add({ key, value }) {
        localStorage.setItem(key, value);
        return true;
    }

    /**
     * Get Storage
     * @param {*} key
     */
    static get(key) {
        const storageItem = localStorage.getItem(key);
        return storageItem || null;
    }

    /**
     * Remove Storage
     * @param {*} key
     */
    static remove(key) {
        localStorage.removeItem(key);
        return true;
    }
}
