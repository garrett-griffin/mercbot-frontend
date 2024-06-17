// App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import AddGameAccount from './pages/AddGameAccount';
import Wrapper from './components/Wrapper/Wrapper';

import { StoreContext } from './store';
import store from './store'; // Import the store correctly

const App = () => {
    const { userId, token } = useContext(StoreContext);

    return (
        <StoreContext.Provider value={store}>
            <Router>
                <Wrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/change-password" element={<ChangePassword />} />
                        <Route path="/add-game-account" element={<AddGameAccount />} />
                        <Route
                            path="/profile"
                            element={<Profile userId={userId} token={token} />}
                        />
                    </Routes>
                </Wrapper>
            </Router>
        </StoreContext.Provider>
    );
};

export default App;
