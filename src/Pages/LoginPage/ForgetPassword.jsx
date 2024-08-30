import React, { useState } from "react";
import NextModal from "./NextModal"; // Import the NextModal component

function ForgetPassword({ show, onClose }) {
  const [showNextModal, setShowNextModal] = useState(false);

  const handleNextClick = () => {
    setShowNextModal(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex justify-center items-center">
      {!showNextModal && (
        <div className="bg-white rounded-lg w-[90%] px-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 2xl:max-w-xl mx-4">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="hover:text-red-500 focus:outline-none text-[#FF2800] text-2xl md:text-3xl"
            >
              &times;
            </button>
          </div>
          <div className="px-2 p-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-[#181919]">
              Reset Password
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mt-2 text-center">
              Enter your email and we'll send you a link to reset your password.
            </p>
            <div className="bg-[#FAFAFA] flex items-center p-3 mt-8 md:mt-10 rounded-full shadow-md h-[35px] sm:h-[40px] md:h-[45px] lg:h-[50px] w-full">
              <img src="/Frame 33.png" alt="" className="h-6 md:h-8" />
              <hr className="w-[1px] h-full bg-[#C2C3C3] border-0 mx-2 md:mx-3" />
              <input
                type="text"
                className="bg-transparent flex-1 p-1 text-[#C2C3C3] text-sm md:text-base placeholder-[#C2C3C3] focus:bg-[#FAFAFA] focus:outline-none"
                placeholder="Email"
              />
            </div>
            <div className="py-8 md:py-10">
              <button
                onClick={handleNextClick} // Trigger the second modal
                className="bg-primary shadow-md rounded-full font-semibold text-sm md:text-lg text-white h-[35px] sm:h-[40px] md:h-[45px] lg:h-[50px] w-full "
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {showNextModal && <NextModal onClose={onClose} />}{" "}
      {/* Show the second modal */}
    </div>
  );
}

export default ForgetPassword;
