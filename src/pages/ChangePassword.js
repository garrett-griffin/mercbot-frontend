// src/pages/ChangePassword.js
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../store';
import { FormContainer, FormTitle, FormGroup, FormLabel, FormInput, FormButton, FormError } from '../components/FormComponents/FormComponents';

const ChangePassword = observer(() => {
    const store = useContext(StoreContext);
    const { token } = store;

    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');

    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            await axios.put('/api/auth/updatePassword', {
                newPassword,
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setNewPassword('');
        } catch (err) {
            setError('Failed to update password');
        }
    };

    return (
        <FormContainer>
            <FormTitle>Change Password</FormTitle>
            <form onSubmit={handleChangePassword}>
                <FormGroup>
                    <FormLabel>New Password</FormLabel>
                    <FormInput
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </FormGroup>
                {error && <FormError>{error}</FormError>}
                <FormButton type="submit">Update Password</FormButton>
            </form>
        </FormContainer>
    );
});

export default ChangePassword;
