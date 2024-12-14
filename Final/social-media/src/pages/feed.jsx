import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests

function Feed() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null); // State to hold the selected file
  const [description, setDescription] = useState(""); // State to hold post description
  const [posts, setPosts] = useState([]); // State to hold fetched posts
  const [loading, setLoading] = useState(true); // Loading state for fetching posts

  // Fetch posts from the backend API
  const fetchPosts = async () => {
    try {
      const response = await axios.get("/posts");
      setPosts(response.data); // Set posts from API response
      setLoading(false); // Stop loading once posts are fetched
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(); // Fetch posts when the component mounts
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]); // Store the uploaded file
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Store the post description
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    if (!file || !description) {
      alert("Please select a file and enter a description.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Append the file
    formData.append("description", description); // Append the description

    try {
      const response = await axios.post("/upload-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("File uploaded successfully:", response.data);
      alert("File uploaded successfully!");
      setFile(null);
      setDescription("");
      fetchPosts(); // Refresh the posts after a successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload the file. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading posts...</p>; // Display loading message while posts are fetched
  }

  return (
    <div>
      <h1>Feed</h1>

      {/* Form for uploading an image */}
      <form onSubmit={handleUpload}>
        <div>
          <label htmlFor="file">Upload Image:</label>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/png, image/jpeg, image/gif"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <label htmlFor="description">Post Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Write something about your post"
          />
        </div>
        <button type="submit">Upload</button>
      </form>

      {/* Display the fetched posts */}
      <div>
        {posts.map((post) => (
          <div key={post.p_post_id}>
            <h3>{post.p_content}</h3>
            {post.p_image && (
              <img
                src={`http://yourserver.com/post/${post.p_post_id}`}
                alt="Post Image"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
