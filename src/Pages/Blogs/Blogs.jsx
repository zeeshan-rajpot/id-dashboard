import React from "react";
import SideBar from "../../components/SideBar";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogs = [
    {
      title: "Dog Trainer",
      date: "May 30, 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit...",
      image: "image 58.png",
    },
    {
      title: "Web Designer",
      date: "May 30, 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit...",
      image: "image 58.png",
    },
    {
      title: "Nursing Assistant",
      date: "May 30, 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit...",
      image: "image 58.png",
    },
    {
      title: "Doctor",
      date: "May 30, 2024",
      description:
        "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit...",
      image: "image 58.png",
    },
  ];
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between gap-4 h-auto w-full">
        <SideBar />
        <div className="pt-10 w-full lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-auto">
          <h2 className="text-primary font-bold text-2xl md:text-3xl px-4">
            Blogs
          </h2>
          <div className="w-full  bg-white py-4 mt-5 md:mt-7 shadow-md min-h-screen rounded-3xl">
            <div className="flex justify-end items-center px-3 py-3 gap-3 md:gap-5 bg-primary text-white rounded-t-2xl	 cursor-pointer">
              <Link to="/blog/addblog">
              <button className=" bg-white text-sm md:text-base text-black px-4 py-2 rounded-2xl">
                + Add Program
              </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                date={blog.date}
                description={blog.description}
                image={blog.image}
              />
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
