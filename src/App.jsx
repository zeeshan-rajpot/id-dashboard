import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/Login";
import Blogs from "./Pages/Blogs/Blogs";
import AddBlog from "./Pages/Add Blogs/AddBlogForm";
import BlogDetail from "./Pages/Blogs/BlogDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/addblog" element={<AddBlog />} />
          <Route path="/blogs/blogdetails/:data" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
