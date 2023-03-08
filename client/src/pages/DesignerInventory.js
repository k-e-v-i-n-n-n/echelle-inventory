import {useParams} from "react-router-dom"
import Item from "../components/Item"
import Designer from "../components/Designer"

const DesignerInventory = ({designers, items}) => {
const {id} = useParams()

let designer = designers?.find((des) => id == des.id)
let itemsArray = items?.filter((item) => item.designer_id == id)
let itemMap = itemsArray?.map((item) => ( <Item key={item.id} item={item}/>))

    return(
        <div className="designer-inventory-page">
            <div className="designers-page">
               <Designer designer={designer}/>
            </div>
            <div className="inventory-container">
                {itemMap}
            </div>
        </div>

)}

export default DesignerInventory