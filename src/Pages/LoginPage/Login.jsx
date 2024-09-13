import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios to make API calls

function Login() {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(false); // Loading state for the login button
  const navigate = useNavigate(); // Hook to redirect upon successful login

  // Function to handle form submission and API call
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    setLoading(true); // Start the loading spinner
    setError(null); // Reset error state

    try {
      // API endpoint for login
      const response = await axios.post(
        "https://lionfish-app-p3lvn.ondigitalocean.app/admin/login",
        {
          email,
          password,
        }
      );

      // Handle successful login (store token, redirect, etc.)
      if (response.status === 200) {
        // Store the token or any session info if needed
        localStorage.setItem("token", response.data.token);

        // Redirect to a protected route (replace with your actual path)
        navigate("/blog");
      }
    } catch (error) {
      // Handle error if login fails
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  return (
    <>
      <section className="h-screen w-screen flex justify-center items-center relative">
        <img
          src="/Group 299.png"
          alt="upper_logo"
          className="hidden md:block absolute top-0 left-0 w-80"
        />
        <form onSubmit={handleLogin} className="flex flex-col">
          <div className="gap-6 md:gap-8 lg:gap-10 flex flex-col justify-center items-center w-full">
            <h1 className="flex items-center font-semibold text-2xl md:text-3xl lg:text-4xl text-[#272828]">
              <span className="me-1">
                <img src="Group 296.svg" alt="logo_image" className="w-6 h-6" />
              </span>{" "}
              IQ-Test
            </h1>
            <h1 className="font-medium text-xl md:text-2xl lg:text-4xl text-[#272828]">
              Login
            </h1>
            <div className="flex flex-col gap-5 px-2">
              {/* Email Input */}
              <div className="bg-[#FAFAFA] flex items-center p-2 md:p-3 rounded-full shadow-md h-[50px] md:h-[55px] lg:h-[59px] w-full md:w-[360px] lg:w-[460px]">
                <img src="/Frame 33.png" alt="" className="h-8 w-8" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-1 text-nowrap h-full outline-none text-[#C2C3C3] text-sm md:text-base placeholder-[#C2C3C3] focus:bg-[#FAFAFA] focus:outline-none"
                  placeholder="Email"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="bg-[#FAFAFA] flex items-center p-2 md:p-3 rounded-full shadow-md h-[50px] md:h-[55px] lg:h-[59px] w-full md:w-[360px] lg:w-[460px]">
                <img src="/Frame 34.png" alt="" className="h-8 w-8" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 h-full outline-none bg-transparent text-[#C2C3C3] text-sm md:text-base"
                  placeholder="Password"
                  required
                />
                <img
                  src="/ion_eye-off.png"
                  alt="toggle password"
                  className="cursor-pointer h-5 w-5"
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>

            <div className="w-full">
              {/* Login Button */}
              <button
                type="submit"
                className="w-full text-sm md:text-base lg:text-lg text-white bg-primary shadow-md rounded-full py-3"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </div>
        </form>
        <img
          src="/Group 296 (1).png"
          alt="lower_logo"
          className="hidden md:block absolute bottom-0 right-0 w-80"
        />
      </section>
    </>
  );
}

export default Login;
