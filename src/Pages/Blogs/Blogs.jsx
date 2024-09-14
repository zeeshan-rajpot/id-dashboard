// Blogs.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBar from "../../components/SideBar";
import BlogCard from "./BlogCard";

const Blogs = () => {
  const [getblog, setBlogs] = useState([]); // State to store fetched blog data
  const [loading, setLoading] = useState(true); // State for loading indication
  const [error, setError] = useState(null); // State for error handling

  // Fetch blogs from the API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://lionfish-app-p3lvn.ondigitalocean.app/admin/get-blog"
        );
        console.log("API Response:", response.data); // Log the response
        setBlogs(response.data); // Update the blogs state with the fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching blogs:", error); // Log the error
        setError("Failed to load blogs. Please try again."); // Set error message
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchBlogs(); // Call the function to fetch blogs when the component mounts
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  // Display loading message while fetching the data
  if (loading) {
    return <p>Loading blogs...</p>;
  }

  // Display error message if there's an error
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between gap-4 h-auto w-full">
        <SideBar />
        <div className="pt-10 w-full lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-auto">
          <h2 className="text-primary font-bold text-2xl md:text-3xl px-4">
            Blogs
          </h2>
          <div className="w-full  bg-white py-4 mt-5 md:mt-7 shadow-md min-h-screen rounded-3xl">
            <div className="flex justify-end items-center px-3 py-3 gap-3 md:gap-5 bg-primary text-white rounded-t-2xl cursor-pointer">
              <Link to="/blog/addblog">
                <button className="bg-white text-sm md:text-base text-black px-4 py-2 rounded-2xl">
                  + Add Program
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
              {getblog.length > 0 ? (
                getblog.map((blog, index) => (
                  <BlogCard
                    key={index}
                    title={blog.title}
                    date={blog.createdAt}
                    description={blog.description}
                    picture={blog.picture} // Pass the picture directly to BlogCard
                  />
                ))
              ) : (
                <p className="text-center col-span-full">No blogs available</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
