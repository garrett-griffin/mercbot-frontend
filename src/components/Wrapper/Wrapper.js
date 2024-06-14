import React, { useContext } from 'react';
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
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/settings">Settings</a></li>
                            <li><a href="/support">Support</a></li>
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
