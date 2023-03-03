import {useState} from "react"

const ItemNew = ({setEditMode}) =>{

    const [newItem, setNewItem] = useState({})

console.log("item new", newItem)

    function updateItem(e){

        setNewItem({...newItem, [e.target.name]: e.target.value })
    }

    return(
        <div className="item-edit-container">
            <input name="name" className="edit-input" placeholder="Coat" onChange={updateItem}/>
            <input name="color" className="edit-input" placeholder="Color" onChange={updateItem}/>
            <input name="size" className="edit-input" placeholder="Size" onChange={updateItem}/>
            <input name="stock" className="edit-input" placeholder="Stock" onChange={updateItem}/>
            <div className="s-e-d-buttons-container">
                <button className="s-e-d-buttons">save</button>
                <button className="s-e-d-buttons">delete</button>
                <button className="s-e-d-buttons">cancel</button>
            </div>
    </div>

    )
}

export default ItemNew