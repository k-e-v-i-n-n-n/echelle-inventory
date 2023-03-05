import {useState, useContext} from "react"
import { UserContext } from "../context/UserContext"
import Item from "./Item"

const ItemNew = ({setEditMode}) =>{
    const {user, setUser} = useContext(UserContext)

    const [newItem, setNewItem] = useState({name: '', color: '', size: '', stock: '', user_id: user.id, designer_id: 3})

    function updateItem(e){
        setNewItem({...newItem, [e.target.name]: e.target.value })}

    function createItem (e){
    e.preventDefault()
        fetch("/items", {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                name: newItem.name,
                color: newItem.color,
                size: newItem.size,
                stock: newItem.stock,
                designer_id: newItem.designer_id,
                user_id: newItem.user_id})})
                .then((r) => r.json()).then((r) => {console.log("create item res", r);newItemState(r)})}

    function newItemState(i){
        let itemsArray = user.items
                itemsArray.push(i)
                     let updatedUser = {...user, items: itemsArray}
                        setUser(updatedUser)}

    return(
        <div className="item-edit-container">
            <input name="name" className="edit-input" placeholder="Coat" onChange={updateItem}/>
            <input name="color" className="edit-input" placeholder="Color" onChange={updateItem}/>
            <input name="size" className="edit-input" placeholder="Size" onChange={updateItem}/>
            <input name="stock" className="edit-input" placeholder="Stock" onChange={updateItem}/>
            <div className="s-e-d-buttons-container">
                <button className="s-e-d-buttons" onClick={(e) => createItem(e)}>save</button>
                <button className="s-e-d-buttons">cancel</button>
            </div>
        </div>

    )
}

export default ItemNew