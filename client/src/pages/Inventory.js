import Item from "../components/Item.js"
import ItemEdit from "../components/ItemEdit.js"
import {UserContext} from "../context/UserContext"
import {useContext} from "react"

const Inventory = () => {

    const {user} = useContext(UserContext)

    let itemMap = user.items?.map((item) => ( <Item key={item.id} item={item}/>)
    )

    return(
        <div className="inventory-container">
            {itemMap}
        </div>
        
    )
}

export default Inventory