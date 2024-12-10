import React from 'react';
import { useNavigate } from 'react-router-dom';
import './publicProfile.css'; // Add styles for the profile page

function PublicProfile() {
  const navigate = useNavigate();

  const posts = [
    { id: 1, content: "Enjoying the sunny weather!", image: "https://via.placeholder.com/150" },
    { id: 2, content: "Just had the best coffee ☕", image: "https://via.placeholder.com/150" },
    { id: 3, content: "Love exploring new places!", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          className="profile-picture"
          src="https://via.placeholder.com/100"
          alt="Profile"
        />
        <h2>John Doe</h2>
        <p>@johndoe</p>
      </div>

      <div className="profile-actions">
        <button>Follow</button>
      </div>

      <div className="profile-posts">
        <h3>User Posts</h3>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.image} alt="Post" className="post-image" />
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PublicProfile;
