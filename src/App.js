// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Wrapper from './components/Wrapper/Wrapper';
import { StoreContext } from './store';
import store from './store'; // Import the store correctly

const App = () => {
    return (
        <StoreContext.Provider value={store}>
            <Router>
                <Wrapper>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Wrapper>
            </Router>
        </StoreContext.Provider>
    );
};

export default App;
