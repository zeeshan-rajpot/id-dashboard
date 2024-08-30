import { MotionConfig, motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    name: "Blog",
    route: "/blog",
    activeLogo: "/Frame.png",
    inactiveLogo: "/Frame.png",
  },
  {
    name: "Logout",
    route: "/",
    activeLogo: "/solar_logout-2-broken.png",
    inactiveLogo: "/solar_logout-2-broken.png",
  },
];

const SideBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setActive((prev) => !prev)}
        type="button"
        className="inline-flex items-center mt-2 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
        style={{
          position: "absolute",
          right: "10px",
          top: "25px",
        }}
      >
        <MotionConfig
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          <motion.button
            initial={false}
            animate={active ? "open" : "closed"}
            className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
          >
            <motion.span
              variants={VARIANTS.top}
              className="absolute h-1 w-10 bg-primary"
              style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
            />
            <motion.span
              variants={VARIANTS.middle}
              className="absolute h-1 w-10 bg-primary"
              style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
            />
            <motion.span
              variants={VARIANTS.bottom}
              className="absolute h-1 w-5 bg-primary"
              style={{
                x: "-50%",
                y: "50%",
                bottom: "35%",
                left: "calc(50% + 10px)",
              }}
            />
          </motion.button>
        </MotionConfig>
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 inset-0 bg-white left-0 z-40 w-60 h-screen transition-transform ${
          active ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          className="h-full px-3 py-4 overflow-y-auto bg-transparent shadow-lg"
          style={{ borderRadius: "0px 40px 0px 0px" }}
        >
          {/* Logo Section with Text */}
          <div className="flex justify-center items-center mb-16 mt-6">
            <img src="/Group 296.svg" alt="Logo" className="w-6 h-6" />
            <span className="text-2xl font-bold ml-2">IQ-Test</span>{" "}
            {/* Add your desired text */}
          </div>

          {/* Menu Items */}
          <ul className="space-y-2 font-medium mt-16">
            {menuItems.map((item) => (
              <li key={item.route} >
                <NavLink
                  to={item.route}
                  className={({ isActive }) =>
                    isActive || item.route === "/logout" // Add condition to highlight logout
                      ? "flex items-center my-4 p-2 text-primary border-r-4	border-primary px-8 "
                      : "flex items-center my-4 p-2 rounded-lg text-[#7E7E7E] hover:bg-gray-100 hover:text-[#7E7E7E] px-6"
                  }
                >
                  {({ isActive }) => (
                    <>
                      <img
                        src={isActive ? item.activeLogo : item.inactiveLogo}
                        alt={`${item.name} logo`}
                      />
                      <span className="ms-3">{item.name}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default SideBar;
