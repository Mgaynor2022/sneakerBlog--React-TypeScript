import React from "react";
import { Kobe } from "./Types";
import PopularSneakersCard from "./PopularSneakersCard";



const KobeSneakerContent = (props: Kobe):any => {

    const {
        kobeSneakers,
        image:{
            original,
            small,
            thumbnail
        }
    } = props

    return (
        <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow">
            
            <img className=" w-full object-cover" src={thumbnail}/>
           
        </div>
    )

}

export default KobeSneakerContent