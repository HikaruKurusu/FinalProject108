import React from 'react';
import { useNavigate } from 'react-router-dom';

function Following() {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Following</h1>
        <button onClick={() => navigate('/feed')}>Go to Feed</button>
        </div>
    );
}

export default Following;