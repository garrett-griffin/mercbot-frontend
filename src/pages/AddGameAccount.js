// src/pages/AddGameAccount.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../store';
import { FormContainer, FormTitle, FormGroup, FormLabel, FormInput, FormButton, FormError } from '../components/FormComponents/FormComponents';

const AddGameAccount = observer(() => {
    const store = useContext(StoreContext);
    const { userId, token } = store;

    const [apiUser, setApiUser] = useState('');
    const [apiToken, setApiToken] = useState('');
    const [error, setError] = useState('');

    // Hard code the seasonId
    const seasonId = 1;

    const handleAddAccount = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/gameAccount/create', {
                apiUser,
                apiToken,
                seasonId,
                userId
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setApiUser('');
            setApiToken('');
        } catch (err) {
            setError('Failed to add game account');
        }
    };

    return (
        <FormContainer>
            <FormTitle>Add Game Account</FormTitle>
            <form onSubmit={handleAddAccount}>
                <FormGroup>
                    <FormLabel>API User</FormLabel>
                    <FormInput
                        type="text"
                        value={apiUser}
                        onChange={(e) => setApiUser(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel>API Token</FormLabel>
                    <FormInput
                        type="text"
                        value={apiToken}
                        onChange={(e) => setApiToken(e.target.value)}
                    />
                </FormGroup>
                {error && <FormError>{error}</FormError>}
                <FormButton type="submit">Add Account</FormButton>
            </form>
        </FormContainer>
    );
});

export default AddGameAccount;
