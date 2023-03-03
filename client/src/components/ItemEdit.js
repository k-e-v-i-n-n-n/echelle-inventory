import {useState} from "react"

const ItemEdit = ({setEditMode}) =>{

    const [itemEditForm, setItemEditForm] = useState({})
console.log("itemEditForm", itemEditForm)
    function updateItem(e){

        setItemEditForm({...itemEditForm, [e.target.name]: e.target.value })
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
                <button className="s-e-d-buttons" onClick={() => setEditMode(false)}>cancel</button>
            </div>
    </div>

    )
}

export default ItemEdit