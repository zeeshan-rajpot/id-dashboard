// BlogCard.js
import React from "react";

const BlogCard = ({ title, date, description, picture }) => {
  // Default image if the picture is invalid
  const defaultImage = "/image 58.png";
  console.log(defaultImage, "test");
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={picture || defaultImage} // Use provided picture or default image
        alt={title}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.src = defaultImage; // Fallback to default image if original fails to load
        }}
      />
      <div className="p-4">
        <div className="text-blue-500 text-sm flex items-center space-x-2">
          <img src="/bi_clock.svg" alt="clock" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-semibold mt-2">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
