import '../CSS/LetteringStairs.css'
import About from './About'



const LetteringStairs = () => {


    return (
        <div id='letters'>
            <div className="container mt-24 mb-20">
            <p>
                <span>Eat</span>
                <span>Sleep</span>
            </p>

            <p> 
                <span>Sleep</span>
                <span>Eat</span>
            </p>
            <p>
                <span>Sneakers</span>
                <span>Sneakers</span>
            </p>
       </div>
       <div className=' p-10'>
        <About />

       </div>


        </div>
       
        
    )
}

export default LetteringStairs