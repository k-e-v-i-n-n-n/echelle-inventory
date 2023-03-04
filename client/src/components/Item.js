import {useState, useContext} from "react"
import ItemEdit from "./ItemEdit.js"
import {UserContext} from "../context/UserContext"

const Item = ({item}) => {

    const [editMode, setEditMode] = useState(false)
    const {user} = useContext(UserContext)
    let {name, color, size, stock, id} = item

    return(

        <>
        {editMode ? <ItemEdit key={id} setEditMode={setEditMode} item={item}/> : 
        <div className="item-container">
             <p>{name}</p>
             <p>{color}</p>
             <p>{size}</p>
             <p>{stock}</p>
             <button className="item-edit-button" onClick={() => setEditMode(true)}>edit</button>
         </div>}
        </>

        

    )
}

export default Item