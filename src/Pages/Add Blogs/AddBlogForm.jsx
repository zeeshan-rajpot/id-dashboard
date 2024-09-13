import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SideBar from "../../components/SideBar";
import axios from "axios"; // Import Axios

const AddBlogForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null); // For holding the actual file

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Show image preview
      setImageFile(file); // Save the actual file for uploading
    }
  };

  const onSubmit = async (data) => {
    try {
      // Create a new FormData object to hold the form values and the image file
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("details", data.details);

      if (imageFile) {
        formData.append("image", imageFile); // Add the image file to the form data
      }

      // Perform the POST request using Axios
      const response = await axios.post(
        "https://lionfish-app-p3lvn.ondigitalocean.app/admin/create-blog", // Replace with your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API Response:", response.data);
      alert("Blog Submitted Successfully");
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("Failed to submit blog. Please try again.");
    }
  };

  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between gap-4 h-auto w-full">
        <SideBar />
        <div className="pt-10 w-full lg:w-[75%] xl:w-[80%] 2xl:w-[85%] h-auto">
          <h2 className="text-primary font-bold text-2xl md:text-3xl px-4">
            Add Blogs
          </h2>
          <div className="w-full bg-white py-4 mt-5 md:mt-7 shadow-md min-h-screen rounded-3xl">
            <div className="max-w-5xl mx-auto p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Image Upload */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Add Image
                  </label>
                  <div className="border-dashed border-2 border-gray-300 rounded-lg h-48 flex items-center justify-center">
                    {image ? (
                      <img
                        src={image}
                        alt="Selected"
                        className="h-full object-cover"
                      />
                    ) : (
                      <label className="flex flex-col items-center justify-center h-full cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                        <svg
                          className="w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4v16m8-8H4"
                          ></path>
                        </svg>
                        <span className="text-gray-500 mt-2">Add Image</span>
                      </label>
                    )}
                  </div>
                </div>

                {/* Blog Title */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    {...register("title", { required: "Title is required" })}
                    className={`shadow appearance-none border ${
                      errors.title ? "border-red-500" : "border-gray-300"
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  />
                  {errors.title && (
                    <p className="text-red-500 text-xs italic mt-2">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                {/* Blog Details */}
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Blog Details
                  </label>
                  <textarea
                    {...register("details", {
                      required: "Details are required",
                    })}
                    className={`shadow appearance-none border ${
                      errors.details ? "border-red-500" : "border-gray-300"
                    } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48`}
                  />
                  {errors.details && (
                    <p className="text-red-500 text-xs italic mt-2">
                      {errors.details.message}
                    </p>
                  )}
                </div>

                {/* Submit and Back Buttons */}
                <div className="flex justify-center px-10 space-x-4">
                  <button
                    type="button"
                    onClick={() => alert("Going back")}
                    className="text-primary border-2 border-primary font-bold w-full rounded-full py-1"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="text-white bg-primary font-bold w-full rounded-full py-1"
                  >
                    Add Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddBlogForm;
