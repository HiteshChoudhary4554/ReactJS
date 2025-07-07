import React from "react";
import { NavLink , Outlet } from "react-router-dom";


export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              omnis voluptatem accusantium nemo perspiciatis delectus atque
              autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
      {/* Hitesh NavLink */}
      <nav className="mt-4">
        <NavLink
          to="hitesh"
          className={({ isActive }) =>
            `${isActive ? "text-orange-700" : "text-gray-700"} 
             block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
             hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
             hover:text-orange-700 lg:p-0`
          }
        >
          Hitesh
        </NavLink>
      </nav>
           <div className="px-6 mt-6">
        <Outlet />
      </div>
    </div>
  );
}
