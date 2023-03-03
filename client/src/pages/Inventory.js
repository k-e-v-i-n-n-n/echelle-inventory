import Item from "../components/Item.js"
import ItemEdit from "../components/ItemEdit.js"

const Inventory = () => {

    return(
        <div className="inventory-container">
            <Item/>
            <Item/>
            <Item/>
            <Item/> 
        </div>
        
    )
}

export default Inventory