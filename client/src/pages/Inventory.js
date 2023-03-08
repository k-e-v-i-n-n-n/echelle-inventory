import Item from "../components/Item.js"
import {UserContext} from "../context/UserContext"
import {useContext} from "react"

const Inventory = ({items}) => {

    const {user} = useContext(UserContext)

    let itemMap = items?.map((item) => ( <Item key={item.id} item={item}/>)
    )

    return(

        <>
        {user? <div className="inventory-container">
            {itemMap} </div> : 
            
            <div className="landing-page">
                <p>Please Login</p> 
            </div>}
        </>
        
    )
}

export default Inventory