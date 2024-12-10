import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./LoginPage/Login";
import privateProfile from "./pages/privateProfile";
import publicProfile from "./pages/publicProfile";
import Feed from "./pages/Feed";
import Search from "./pages/Search";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import CreatePost from "./pages/CreatePost";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<privateProfile />} />
          <Route path="/publicProfile" element={<publicProfile />} />
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
