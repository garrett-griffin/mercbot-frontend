import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import '../../styles/App.css'; // Ensure the main styles are applied
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../store';
import AccountDropdown from '../AccountDropdown/AccountDropdown';

const Wrapper = observer(({ children }) => {
    const store = useContext(StoreContext);

    return (
        <div className="App">
            <Navbar isLoggedIn={store.isLoggedIn} username={store.username} />
            <div className="sidebar">
                {store.isLoggedIn && (
                    <nav>
                        <ul>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            <li><Link to="/settings">Settings</Link></li>
                            <li><Link to="/support">Support</Link></li>
                        </ul>
                    </nav>
                )}
            </div>
            <div className="content">
                {store.isLoggedIn && <AccountDropdown />}
                {children}
            </div>
        </div>
    );
});

export default Wrapper;
