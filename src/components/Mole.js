//structure:
//This will represent a displayed mole. It ultimately will contain a timer determining 
//the lifespan of a mole. This component will render when displayMole === true

//A useEffect hook that will start the timer and clean it up afterward

import { useEffect } from "react"
import MoleImg from "./mole.png"

const Mole = (props) => {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)

        return () => clearTimeout(timer)
        })
    return (
        <div>
            <img style = {{width: '30vw', display: 'inline-flex', margin: '0 auto'}} src={MoleImg} onClick={props.handleClick} />
        </div>
    )
}

export default Mole
