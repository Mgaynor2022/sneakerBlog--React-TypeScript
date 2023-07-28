import React, { useContext, useEffect, useState } from "react";
import { UserContext} from "../Context/UserProvider";
import { UserContextType, CommentContextType, Kobe, Sneakers } from "../Types/Types"
import { Link } from 'react-router-dom'

const PublicPage: React.FC = () => {

  
  const {
    // addComment,
    // getComments,
    // deleteComment,
    getPublicSneakers,
    popularSneakers,
    getPopularSneakers,
    getKobeSneakers,
  
  } = useContext<UserContextType>(UserContext);
  
  // const { commentInput,
  //   handleChange
  // } = useContext<CommentContextType>(CommentsContext)
  
  useEffect(() => {
      getPublicSneakers()
      getPopularSneakers()
      
  }, [])

      return (
      <>
      <div id='trend' className='flex items-center'>
          <h1 className="text-2xl pl-10">Trending Sneakers</h1><hr className="w-8/12 text-center h-px mx-5 bg-gray-200 border-0"/>
        </div>
      <div id='trendItems'>
          <div id='slider' className=" " >
            {popularSneakers &&
              popularSneakers.map((trend) => (
                <div id="slide-tracker" className="cursor-pointer flex justify-between animate-marquee-infinite ">
                  <Link to={`/PopularSneakersCard/${trend.id}`} key={trend.id}>
                    <div id='slide' className="flex justify-evenly h-64 w-64 items-center p-15 transform hover:scale-110 duration-500">
                      <img className="w-full transform hover:scale-150 "  src={trend.image} />
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