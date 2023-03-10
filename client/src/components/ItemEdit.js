import {useState, useContext} from "react"
import {UserContext} from "../context/UserContext" 


const ItemEdit = ({setEditMode, item}) =>{

    const {user, setUser} = useContext(UserContext)
    const [itemEdit, setitemEdit] = useState(item)

    function updateItem(e){
        setitemEdit({...itemEdit, [e.target.name]: e.target.value })}

function updateFetch(){

    if (itemEdit.name == ""){alert("Please include item name")}
    else
    {

    fetch(`/items/${itemEdit.id}`, {
        method:"PATCH",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(
            {   name: itemEdit.name,
                color: itemEdit.color,
                size: itemEdit.size,
                stock: itemEdit.stock,
                designer_id: itemEdit.designer_id})})
            .then((r) => {
            if(r.ok)
            {r.json().then((r) => {setEditMode(false); editState()})}
            else
            {r.json().then(() => {alert(r.errors)})}
            })
        }}

function deleteFetch(){
    fetch(`/items/${item.id}`,{
        method: "DELETE",
        headers: {"Content-Type": "application/json"}})
       .then((r) => {
       if(r.ok)
       {deleteItem();}})}

function deleteItem(){
    let itemsFiltered = user.items.filter((i) => i.id !== item.id)
    let secondFilter = itemsFiltered.filter((itemFil) => itemFil.designer_id == item.designer_id)

        if(secondFilter.length === 0)
            { 
            let desFiltered = user.designers.filter((des) => des.id !== item.designer_id)
            let updatedUser = {...user, designers: desFiltered, items: itemsFiltered}
            setUser(updatedUser)}
            else
            {setUser({...user, items: itemsFiltered})}
}

function editState(){
   let filtered = user.items.filter((item) => item.id !== itemEdit.id)
   let updatedUser = {...user, items: [...filtered, itemEdit]}
   setUser(updatedUser)}

    return(
        <div key={itemEdit.id} className="item-edit-container">
            <input name="name" value={itemEdit.name} className="edit-input" placeholder="Coat" onChange={updateItem}/>
            <input name="color" value={itemEdit.color} className="edit-input" placeholder="Color" onChange={updateItem}/>
            <input name="size" value={itemEdit.size} className="edit-input" placeholder="Size" onChange={updateItem}/>
            <input name="stock" value={itemEdit.stock} className="edit-input" placeholder="Stock" onChange={updateItem}/>
            <div className="s-e-d-buttons-container">
                <button className="s-e-d-buttons" onClick={() => {updateFetch()}}>save</button>
                <button className="s-e-d-buttons" onClick={() => deleteFetch()}>delete</button>
                <button className="s-e-d-buttons" onClick={() => setEditMode(false)}>cancel</button>
            </div>
    </div>

    )
}

export default ItemEdit