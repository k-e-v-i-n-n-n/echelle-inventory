import Item from "../components/Item.js"
import {UserContext} from "../context/UserContext"
import {useContext} from "react"

const Inventory = ({items}) => {

    // const {user} = useContext(UserContext)

    let itemMap = items?.map((item) => ( <Item key={item.id} item={item}/>)
    )

    return(
        <div className="inventory-container">
            {itemMap}
        </div>
        
    )
}

export default Inventory