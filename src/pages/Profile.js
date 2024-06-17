// src/pages/Profile.js
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../store';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    max-width: 800px;
    margin: 20px auto;
    color: #fff;
`;

const Title = styled.h1`
    color: #61dafb;
    margin-bottom: 20px;
`;

const InfoList = styled.div`
    margin-bottom: 20px;
`;

const InfoItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #333;
`;

const Label = styled.span`
    font-weight: bold;
`;

const Value = styled.span`
    color: #61dafb;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 20px;
`;

const Button = styled(Link)`
    padding: 10px 20px;
    background-color: #61dafb;
    color: #000;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
    &:hover {
        background-color: #21a1f1;
    }
`;

const GameAccountList = styled.div`
    margin-top: 20px;
`;

const GameAccountItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #333;
`;

const Profile = observer(() => {
    const store = useContext(StoreContext);
    const { userId, token } = store;

    const [username, setUsername] = useState('');
    const [gameAccounts, setGameAccounts] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`/api/auth/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsername(response.data.username);
            } catch (err) {
                console.error('Failed to fetch user information', err);
            }
        };

        const fetchGameAccounts = async () => {
            try {
                const response = await axios.get(`/api/gameAccount/user/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setGameAccounts(response.data);
            } catch (err) {
                console.error('Failed to fetch game accounts', err);
            }
        };

        fetchUser();
        fetchGameAccounts();
    }, [userId, token]);

    return (
        <Container>
            <Title>Profile</Title>
            <InfoList>
                <InfoItem>
                    <Label>Username:</Label>
                    <Value>{username}</Value>
                </InfoItem>
                <InfoItem>
                    <Label>Password:</Label>
                    <Value>
                        <Button to="/change-password">Change Password</Button>
                    </Value>
                </InfoItem>
            </InfoList>
            <Title>Game Accounts</Title>
            <GameAccountList>
                {gameAccounts.map(account => (
                    <GameAccountItem key={account.id}>
                        <Label>{account.apiUser}</Label>
                        <Value>{account.apiToken}</Value>
                    </GameAccountItem>
                ))}
            </GameAccountList>
            <ButtonContainer>
                <Button to="/add-game-account">Add Game Account</Button>
            </ButtonContainer>
        </Container>
    );
});

export default Profile;
