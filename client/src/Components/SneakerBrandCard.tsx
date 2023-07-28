import React from "react";
import { BrandLink } from "../Types/Types";
import { Link } from 'react-router-dom'


const SneakerBrandCard = (props: BrandLink) => {

    const {image, header} = props

    return (

        <div className="wrapper">
        <div className="card ">
            <div className="poster">
                <img src={image} alt="Location Unknown"/>
            </div>
            <div className="details  text-center">
                <h1> {header}</h1>
                {/* <h2>2021 • PG • 1hr 38min</h2> */}
                {/* <div className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <span>4.2/5</span>
                </div>
                <div className="tags">
                    <span className="tag">Italian</span>
                    <span className="tag">Drama</span>
                    <span className="tag">Indie</span>
                </div>
                <p className="desc">
                    Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.
                </p> */}
            </div>
        </div>
    </div>
        
    )

}

export default SneakerBrandCard