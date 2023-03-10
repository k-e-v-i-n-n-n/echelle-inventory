import ItemNew from "../components/ItemNew.js"
import { UserContext } from "../context/UserContext.js"
import {useContext} from "react"


const Add = ({globalDesigners}) => {

    const {user} = useContext(UserContext)
    
    return(
    <>
        {user? <div className="add-container">
                <ItemNew globalDesigners={globalDesigners}/>
                 </div>
            :
                <div className="landing-page">
                    <p>Please Login</p> 
                </div>}
    </>        
      
    )
}

export default Add