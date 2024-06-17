// src/components/GameAccountForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.div`
    padding: 20px;
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 20px auto;
`;

const Input = styled.input`
    width: calc(100% - 22px);
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #0056b3;
    }
`;

const GameAccountForm = ({ userId, onGameAccountAdded }) => {
    const [apiUser, setApiUser] = useState('');
    const [apiToken, setApiToken] = useState('');
    const [seasonId, setSeasonId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/gameAccount/create', {
                apiUser,
                apiToken,
                seasonId,
                userId
            });
            onGameAccountAdded(response.data);
            setApiUser('');
            setApiToken('');
            setSeasonId('');
        } catch (err) {
            console.error('Failed to create game account', err);
        }
    };

    return (
        <FormContainer>
            <h2>Add Game Account</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="API User"
                    value={apiUser}
                    onChange={(e) => setApiUser(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="API Token"
                    value={apiToken}
                    onChange={(e) => setApiToken(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Season ID"
                    value={seasonId}
                    onChange={(e) => setSeasonId(e.target.value)}
                    required
                />
                <Button type="submit">Add Game Account</Button>
            </form>
        </FormContainer>
    );
};

export default GameAccountForm;
