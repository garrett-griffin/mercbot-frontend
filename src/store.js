// store.js
import { observable, action, makeObservable } from 'mobx';
import { createContext } from 'react';
import { jwtDecode } from 'jwt-decode'; // Importing jwtDecode as a named export

class Store {
    isLoggedIn = false;
    username = '';
    token = '';
    userId = null;

    constructor() {
        makeObservable(this, {
            isLoggedIn: observable,
            username: observable,
            token: observable,
            userId: observable,
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

        // Decode userId from the token
        const decodedToken = jwtDecode(token);
        this.userId = decodedToken.id;

        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        localStorage.setItem('userId', decodedToken.id);
    }

    logout() {
        this.isLoggedIn = false;
        this.username = '';
        this.token = '';
        this.userId = null;
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    }

    loadFromLocalStorage() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const username = localStorage.getItem('username');
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        if (isLoggedIn && username && token && userId) {
            this.isLoggedIn = true;
            this.username = username;
            this.token = token;
            this.userId = userId;
        }
    }
}

const store = new Store();
export const StoreContext = createContext(store);

export default store;
