import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import store from '../../store';
import './Navbar.css'; // Import the CSS file for the navbar

const Navbar = observer(() => {
    const navigate = useNavigate();

    const handleLogout = () => {
        store.logout();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                <Link to="/" className="nav-logo">MercBot.io</Link>
            </div>
            <div className="nav-right">
                {store.isLoggedIn ? (
                    <>
                        <span className="nav-username">{store.username}</span>
                        <span className="nav-link" onClick={handleLogout}>Logout</span>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
});

export default Navbar;
