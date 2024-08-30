import React, { useState } from "react";
import { Link } from "react-router-dom";
import ForgetPassword from "./ForgetPassword"; // Ensure this path is correct

function Login() {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="h-screen w-screen flex justify-center items-center relative">
        <img src="/Group 299.png" alt="upper_logo" className="hidden md:block absolute top-0 left-0 w-80 "  />
        <div className="flex flex-col  ">
          <div className="gap-6 md:gap-8 lg:gap-10  flex flex-col justify-center items-center w-full">
            <h1 className="flex items-center font-semibold text-2xl md:text-3xl lg:text-4xl text-[#272828]">
           <span className="me-1">
            <img src="Group 296.svg" alt="logo_image" className="w-6 h-6" />
            </span > IQ-Test
            </h1>
            <h1 className="font-medium text-xl md:text-2xl lg:text-4xl text-[#272828]">
              Login
            </h1>
            <div className="flex flex-col gap-5 px-2">
              <div className="bg-[#FAFAFA] flex items-center p-2 md:p-3 rounded-full shadow-md h-[50px] md:h-[55px] lg:h-[59px] w-full md:w-[360px] lg:w-[460px]">
                <img src="/Frame 33.png" alt="" className="h-8 w-8" />
                <input
                  type="text"
                  className="bg-transparent flex-1 text-nowrap h-full outline-none text-[#C2C3C3] text-sm md:text-base placeholder-[#C2C3C3] focus:bg-[#FAFAFA] focus:outline-none focus:fill-none"
                  placeholder="Email"
                />
              </div>

              <div className="bg-[#FAFAFA] flex items-center p-2 md:p-3 rounded-full shadow-md h-[50px] md:h-[55px] lg:h-[59px] w-full md:w-[360px] lg:w-[460px]">
                <img src="/Frame 34.png" alt="" className="h-8 w-8" />
                <input
                  type="password"
                  className="flex-1 h-full outline-none bg-transparent text-[#C2C3C3] text-sm md:text-base"
                  placeholder="Password"
                />
                <img
                  src="/ion_eye-off.png"
                  alt=""
                  className="cursor-pointer h-5 w-5"
                />
              </div>
              <h1
                className="text-right font-normal text-sm md:text-base text-primary cursor-pointer"
                onClick={handleModalOpen}
              >
                Forgot password?
              </h1>
            </div>

            <div className="w-full">
              <Link to="/blog" >
              <button className=" w-full text-sm md:text-base lg:text-lg text-white bg-primary shadow-md rounded-full py-3 ">
                Login
              </button>
              </Link>
            </div>
          </div>
        </div>
        <img src="/Group 296 (1).png" alt="upper_logo" className="hidden md:block absolute bottom-0 right-0 w-80 "  />

      </section>

      {/* Forgot Password Modal */}
      <ForgetPassword show={showModal} onClose={handleModalClose} />
    </>
  );
}

export default Login;
