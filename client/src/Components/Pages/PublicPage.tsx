import React, { useContext, useEffect } from "react";
import { UserContext} from "../../Context/UserProvider";
import { UserContextType } from "../../Types/Types"
import { Link } from 'react-router-dom'

const PublicPage: React.FC = () => {

  const {
   
    getPublicSneakers,
    popularSneakers,
    getPopularSneakers,
  
  } = useContext<UserContextType>(UserContext);

  useEffect(() => {
      getPublicSneakers()
      getPopularSneakers()
    
  }, [])

      return (
      <>
      <div id='trend' className='flex items-center'>
          <h1  className="text-2xl pl-10">Trending Sneakers</h1><hr className="w-8/12 text-center h-px mx-5 bg-gray-200 border-0"/>
        </div>
      <div id='trendItems'>
          <div id='slider'>
            {popularSneakers &&
              popularSneakers.map((trend) => (
                <div key={trend._id} id="slide-tracker" className="cursor-pointe flex justify-between animate-marquee-infinite p-5 ">
                  <Link to={`/PopularSneakersPage/${trend.id}`} key={trend.id}>
                    <div id='slide' className=" flex justify-evenly relative h-64 w-64 items-center p-15 transform hover:scale-110 duration-500 ">
                      <img loading="lazy" id="slideImg"src={trend.image} />
                  </div>
                  </Link>
                 
                </div>
              ))}

          </div>
          
      </div>
      </>
    );
  };

export default PublicPage
