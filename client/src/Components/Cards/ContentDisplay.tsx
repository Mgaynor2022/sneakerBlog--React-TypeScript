import React, { useState } from "react";
import SneakerBrandCard from "./SneakerBrandCard";
import { Link } from 'react-router-dom'
import "../../Css/Card.css"


const ContentDisplay: React.FC = () => {

    const [clickValue, setClickValue] = useState<string>('')

    const handleClick = (value: string) => {
        setClickValue(value)
    }
    
    return (
        <>
             <header id='title' className='flex items-center justify-center '>
                <h1 className="text-2xl pl-10">Popular Brands</h1>
                <hr className="w-8/12  h-px mx-5 bg-gray-200 border-0"/>
            </header>
                <div id="content1" onMouseOver={() => handleClick('Nike')} >
                        <Link to={`/PopularSneakersCard/brands/${clickValue}`}>
                            <SneakerBrandCard
                            image = 'https://images.unsplash.com/photo-1543508282-6319a3e2621f' 
                            header = 'View Nike Sneakers'
                            />
                        </Link>
                    </div>
                    <div id="content2" onMouseOver={() => handleClick('Jordan')}>
                        <Link to={`/PopularSneakersCard/brands/${clickValue}`}>
                            <SneakerBrandCard
                            image="https://images.unsplash.com/photo-1600686436232-82a3c677bc51"
                            header= "View Air Jordan Sneakers" />
                        </Link>
                    </div>
                    <div id="content3" onMouseOver={() => handleClick('adidas')}>
                        <Link to={`/PopularSneakersCard/brands/${clickValue}`}>
                            <SneakerBrandCard
                            image="https://images.unsplash.com/photo-1679791759542-e234e02c4d3d"
                            header= "View Adidas Sneakers" />
                        </Link>
                    </div>

                
        </>
        
    )

}

export default ContentDisplay