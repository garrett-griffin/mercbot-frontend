import React, { useContext } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import config from '../config';
import { StoreContext } from '../store';
import '../styles/Auth.css';

const Register = observer(() => {
    const store = useContext(StoreContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${config.apiUrl}/auth/register`, { username: store.username, password: store.password });
            store.success = 'Registration successful! Please log in.';
            store.username = '';
            store.password = '';
        } catch (error) {
            console.error(error);
            store.error = 'Registration failed. Try again.';
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSubmit} className="auth-form">
                <h2>Register</h2>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={store.username} onChange={(e) => store.username = e.target.value} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={store.password} onChange={(e) => store.password = e.target.value} />
                </div>
                {store.error && <div className="form-error">{store.error}</div>}
                {store.success && <div className="form-success">{store.success}</div>}
                <button type="submit" className="auth-button">Register</button>
            </form>
        </div>
    );
});

export default Register;
