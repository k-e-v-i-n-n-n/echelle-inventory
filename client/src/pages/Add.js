import ItemNew from "../components/ItemNew.js"
import { UserContext } from "../context/UserContext.js"
import {useContext} from "react"


const Add = () => {

    const {user} = useContext(UserContext)
    
    return(
    <>
        {user? <div className="add-container">
                <ItemNew/>
                 </div>
            :
                <div className="landing-page">
                    <p>Please Login</p> 
                </div>}
    </>        
      
    )
}

export default Add