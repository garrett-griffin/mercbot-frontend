// store.js
import { observable, action, makeObservable } from 'mobx';
import { createContext } from 'react';

class Store {
    isLoggedIn = false;
    username = '';
    token = '';

    constructor() {
        makeObservable(this, {
            isLoggedIn: observable,
            username: observable,
            token: observable,
            login: action,
            logout: action,
            loadFromLocalStorage: action,
        });

        this.loadFromLocalStorage();
    }

    login(username, token) {
        this.isLoggedIn = true;
        this.username = username;
        this.token = token;
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
    }

    logout() {
        this.isLoggedIn = false;
        this.username = '';
        this.token = '';
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('token');
    }

    loadFromLocalStorage() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        if (isLoggedIn && username && token) {
            this.isLoggedIn = true;
            this.username = username;
            this.token = token;
        }
    }
}

const store = new Store();
export const StoreContext = createContext(store);

export default store;
