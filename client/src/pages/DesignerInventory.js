import {useParams} from "react-router-dom"
import Item from "../components/Item"
import Designer from "../components/Designer"
import DesignerStats from "../components/DesignerStats"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

const DesignerInventory = ({designers, items, globalDesigners}) => {
const {id} = useParams()

const {user} = useContext(UserContext)

let designer = designers?.find((des) => id == des.id)
let itemsArray = items?.filter((item) => item.designer_id == id)
let itemMap = itemsArray?.map((item) => ( <Item key={item.id} item={item}/>))

    return(
    <>
        {user?   
            <div className="designer-inventory-page">
                <div className="designers-page">
                  <DesignerStats designer={designer} globalDesigners={globalDesigners} />
                  <Designer designer={designer}/>
                      
                </div>
                <div className="inventory-container">
                    {itemMap}
                </div>
            </div>   
            :
            <div className="landing-page">
                 <p>Please Login</p> 
            </div>}
        </> 

)}

export default DesignerInventory