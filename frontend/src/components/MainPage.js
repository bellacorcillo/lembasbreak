import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
    const navigate = useNavigate();

    const mainPageStyle = {
        backgroundImage: 'url(/mainbackground.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    return (
        <div className="main-container" style={mainPageStyle}>
            <h1 className="main-header">Lembas Break 🍞🍃</h1>
            <p className="subtitle">From the Shire to Mordor, every traveler needs their Lembas breaks.</p>
            <div className="button-group">
                <button className="main-button" onClick={() => navigate('/login')}>Login</button>
                <button className="main-button" onClick={() => navigate('/create-account')}>Create Account</button>
            </div>
        </div>
    );
}


export default MainPage;