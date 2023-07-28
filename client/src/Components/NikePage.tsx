import { useContext } from "react"
import { UserContextType } from "../Types/Types"
import { UserContext } from "../Context/UserProvider"
import { useParams } from "react-router-dom"
import PopularSneakersCard from "./PopularSneakersCard"
import { MdOutlineArrowBack } from 'react-icons/md'


const NikePage: React.FC = () => {
    
    const { click } = useParams<{click: string,}>()

    const {
        allSneakers,
        backButton

    } = useContext<UserContextType>(UserContext)


    const filteredNike = allSneakers.filter((sneaker) => sneaker.brand === click)

    console.log("test",click)


    return (
        <div id="nikePage">
            <MdOutlineArrowBack onClick={backButton} size='1.5rem' cursor='pointer'/>
            
            {filteredNike && filteredNike.map((sneaker) => (
                <div key={sneaker.brand}>
                    <PopularSneakersCard
                    {...sneaker}
                    backButton={backButton}
                     />
                </div>
            ))}
        </div>
    )


}

export default NikePage