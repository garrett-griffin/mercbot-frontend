import React, { useContext } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import config from '../config';
import { StoreContext } from '../store';
import '../styles/Auth.css';

const Login = observer(() => {
    const store = useContext(StoreContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${config.apiUrl}/auth/login`, { username: store.username, password: store.password });
            const token = res.data.token;
            store.login(store.username, token);
            // Redirect to dashboard or home
            window.location.href = '/';
        } catch (error) {
            console.error(error);
            store.error = 'Invalid username or password';
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={store.username} onChange={(e) => store.username = e.target.value} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={store.password} onChange={(e) => store.password = e.target.value} />
                </div>
                {store.error && <div className="form-error">{store.error}</div>}
                <button type="submit" className="auth-button">Login</button>
            </form>
        </div>
    );
});

export default Login;
