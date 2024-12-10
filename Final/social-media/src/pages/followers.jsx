import React from 'react';
import { useNavigate } from 'react-router-dom';

function Followers() {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Followers</h1>
        <button onClick={() => navigate('/feed')}>Go to Feed</button>
        </div>
    );
}

export default Followers;