import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/Login";
import Blogs from "./Pages/Blogs/Blogs";
import AddBlog from "./Pages/Add Blogs/AddBlogForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/addblog" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
