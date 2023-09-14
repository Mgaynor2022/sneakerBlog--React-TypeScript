import React from "react";
import { Link } from "react-router-dom";
import SneakerBrandCard from "./SneakerBrandCard";

const KobeDisplay: React.FC = () => {
  return (
    <>
      <div id="space1" className="flex items-center justify-center ">
        <h1 className=" text-2xl pl-10">Top Kobe Sneakers</h1>
        <hr className=" w-1/6 h-px mx-5 bg-gray-200 border-0" />
      </div>
      <div id="sidebar" className="">
        <Link to="/SidebarPage">
          <SneakerBrandCard
            image="https://images.unsplash.com/photo-1632341650004-68d3aa42a9e9"
            header="View Top Kobe Sneakers "
          />
        </Link>
      </div>
    </>
  );
};

export default KobeDisplay;
