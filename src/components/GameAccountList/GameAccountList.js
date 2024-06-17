// src/components/GameAccountList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ListContainer = styled.div`
    max-width: 500px;
    margin: 20px auto;
`;

const GameAccountItem = styled.div`
    background: #f9f9f9;
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    padding: 5px 10px;
    background: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background: #c82333;
    }
`;

const GameAccountList = ({ userId }) => {
    const [gameAccounts, setGameAccounts] = useState([]);

    useEffect(() => {
        const fetchGameAccounts = async () => {
            try {
                const response = await axios.get(`/api/gameAccount/user/${userId}`);
                setGameAccounts(response.data);
            } catch (err) {
                console.error('Failed to fetch game accounts', err);
            }
        };

        fetchGameAccounts();
    }, [userId]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/gameAccount/${id}`);
            setGameAccounts(gameAccounts.filter(account => account.id !== id));
        } catch (err) {
            console.error('Failed to delete game account', err);
        }
    };

    return (
        <ListContainer>
            <h2>Your Game Accounts</h2>
            {gameAccounts.map(account => (
                <GameAccountItem key={account.id}>
                    <div>{account.apiUser}</div>
                    <Button onClick={() => handleDelete(account.id)}>Delete</Button>
                </GameAccountItem>
            ))}
        </ListContainer>
    );
};

export default GameAccountList;
