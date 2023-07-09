import React from "react";
import SneakerBrandCard from "./SneakerBrandCard";

const ContentDisplay: React.FC = () => {

    return (
        <>
             <div id='title' className='flex items-center '>
                <h1 className="  text-2xl pl-10">Popular Brands</h1>
                <hr className="w-8/12  h-px mx-5 bg-gray-200 border-0"/>
            </div>
            <div id="content1">
                <SneakerBrandCard
                image = 'https://images.unsplash.com/photo-1543508282-6319a3e2621f' 
                header = 'View Nike Sneakers'
                />
            </div>
            <div id="content2">
                <SneakerBrandCard
                image="https://images.unsplash.com/photo-1600686436232-82a3c677bc51"
                header= "View Air Jordan Sneakers" />
            </div>
            <div id="content3">
            <SneakerBrandCard
                image="https://images.unsplash.com/photo-1679791759542-e234e02c4d3d"
                header= "View Adidas Sneakers" />
            </div>
        </>
        
    )

}

export default ContentDisplay