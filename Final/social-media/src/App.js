import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginPage/Login";
import PrivateProfile from "./pages/privateProfilePage/privateProfile";
import PublicProfile from "./pages/publicProfilePage/publicProfile";
import Feed from "./pages/feedPage/feed";
import Search from "./pages/searchPage/search";
import Followers from "./pages/followersPage/followers";
import Following from "./pages/followingPage/following";
import CreatePost from "./pages/createPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<PrivateProfile />} />
          <Route path="/publicProfile" element={<PublicProfile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/search" element={<Search />} />
          <Route path="/followers" element={<Followers />} />
          <Route path="/following" element={<Following />} />
          <Route path="/createPost" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
