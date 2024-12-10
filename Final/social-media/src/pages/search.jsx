import React from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Search</h1>
        <button onClick={() => navigate("/feed")}>Go to Feed</button>
        </div>
    );
}

export default Search;