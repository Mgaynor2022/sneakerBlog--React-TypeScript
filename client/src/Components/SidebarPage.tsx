import React, { useContext, useEffect } from "react";

import { UserContext} from "../Context/UserProvider";
import { UserContextType, CommentContextType } from "./Types"
import KobeSneakerContent from "./KobeSneakerContent";


const SidebarPage = (): any => {

    useEffect(() => {
        getKobeSneakers()
    })
    
    const {
        kobeSneakers,
        getKobeSneakers
    } = useContext<UserContextType>(UserContext)
    
    // const { commentInput,
    //     handleChange
    //   } = useContext<CommentContextType>(CommentsContext)

    return (
        <div id="KobeItems" className="grid grid-cols-2 ana" >
            {kobeSneakers &&
              kobeSneakers.map((kobes) => (
              <div >
                    <KobeSneakerContent
                    {...kobes}                 
                    />
                </div>
            ))}
            
        </div>
    )

}


export default SidebarPage