import React from "react";
import { Link } from 'react-router-dom'
import SneakerBrandCard from "./SneakerBrandCard";


const JordanSidebar: React.FC = () => {

    return (
        <>
            <div id='space' className='flex items-center '>
                <h1 className="text-2xl pl-10">Top Jordans Sneakers</h1>
                <hr className="w-1/5 h-px mx-5 bg-gray-200 border-0"/>
            </div>
            <div id="sidebar2">
                <SneakerBrandCard
                image = 'https://images.unsplash.com/photo-1661592859064-4c3be073f72c' 
                header = 'View Top Air Jordans '/>
            </div>
        
        </>

        
    )

}

export default JordanSidebar