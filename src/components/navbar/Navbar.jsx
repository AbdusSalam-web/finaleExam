import React from "react";
import { IoLogInOutline } from "react-icons/io5";
import { MdNoteAlt } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div class="card w-72 bg-white p-5 shadow-md shadow-purple-200/50 rounded-md">
        <ul class="w-full flex flex-col gap-2">
          <li class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
            <button class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear">
              <svg
                stroke="#000000"
                class="icon glyph size-6 group-focus:fill-white group-focus:stroke-white"
                id="dashboard-alt"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
              >
                <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                <g
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  id="SVGRepo_tracerCarrier"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M14,10V22H4a2,2,0,0,1-2-2V10Z"></path>
                  <path d="M22,10V20a2,2,0,0,1-2,2H16V10Z"></path>
                  <path d="M22,4V8H2V4A2,2,0,0,1,4,2H20A2,2,0,0,1,22,4Z"></path>
                </g>
              </svg>
              Dashboard
            </button>
          </li>
          <li class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
            <Link
              to="/signup"
              class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <MdNoteAlt className="w-6 h-6 text-[24px]" />
              Sing Up
            </Link>
          </li>
          <li class="flex-center cursor-pointer p-16-semibold w-full whitespace-nowrap">
            <Link
              to="/login"
              class="p-16-semibold flex size-full gap-4 p-4 group font-semibold rounded-full bg-cover hover:bg-purple-100 hover:shadow-inner focus:bg-gradient-to-r from-purple-400 to-purple-600 focus:text-white text-gray-700 transition-all ease-linear"
            >
              <IoLogInOutline className="w-6 h-6 text-[24px]" />
              Log in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
