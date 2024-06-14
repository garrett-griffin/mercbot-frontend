import React, { useState, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../store';
import './AccountDropdown.css'; // Make sure to create and import the corresponding CSS file

const AccountDropdown = observer(() => {
    const store = useContext(StoreContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleAccountChange = (account) => {
        store.setSelectedAccount(account);
        setIsOpen(false);
    };

    return (
        <div className="account-dropdown">
            <div
                type="button"
                className="dropdown-toggle"
                aria-haspopup="menu"
                aria-expanded={isOpen}
                onClick={handleToggle}
            >
                <div className="account-name">
                    {store.selectedAccount} <span className="dropdown-arrow">&#9660;</span>
                </div>
            </div>
            {isOpen && (
                <div className="dropdown-menu">
                    <div className="dropdown-item" onClick={() => handleAccountChange('Account 1')}>Account 1</div>
                    <div className="dropdown-item" onClick={() => handleAccountChange('Account 2')}>Account 2</div>
                    <div className="dropdown-item" onClick={() => handleAccountChange('Account 3')}>Account 3</div>
                </div>
            )}
        </div>
    );
});

export default AccountDropdown;
