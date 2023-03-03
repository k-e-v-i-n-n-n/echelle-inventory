import {useContext} from "react"
import {UserContext} from "../context/UserContext.js"


const Landing = () => {

    const {user} = useContext(UserContext)
    return(

        <div className="landing-page">
          {user? <p>Bonjour, {user.username}</p> : <p>Please Login</p> }  
        </div>

    )
}

export default Landing