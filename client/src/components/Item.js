import {useState} from "react"
import ItemEdit from "./ItemEdit.js"

const Item = () => {

    const [editMode, setEditMode] = useState(false)
    console.log("edit mode", editMode)

    return(

        <>
        {editMode ? <ItemEdit setEditMode={setEditMode} />: <div className="item-container">
                <p>Coat</p>
                <p>Color</p>
                <p>Size</p>
                <p>Stock</p>
                <button className="item-edit-button" onClick={() => setEditMode(true)}>edit</button>
            </div>}
        </>

        

    )
}

export default Item