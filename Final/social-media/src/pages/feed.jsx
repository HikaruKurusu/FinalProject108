import React from "react";
import { useNavigate } from "react-router-dom";


function Feed() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Feed</h1>
      <button onClick={() => navigate("/profile")}>Go to Profile</button>
    </div>
  );
}

export default Feed;