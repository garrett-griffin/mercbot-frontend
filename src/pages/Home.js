import React, { useEffect, useState } from 'react';
import config from '../config';

const Home = () => {
    const [turn, setTurn] = useState({ month: '', year: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTurn = async () => {
            try {
                const response = await fetch(`${config.apiUrl}/turn/current`);
                if (!response.ok) {
                    throw new Error('Failed to fetch turn information');
                }
                const data = await response.json();
                setTurn(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchTurn();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="home">
            <div><h1>Welcome to MercBot</h1></div>
            <div><p>Current Turn: {turn.month} {turn.year}</p></div>
        </div>
    );
};

export default Home;
