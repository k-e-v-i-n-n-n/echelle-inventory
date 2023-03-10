import {useState, useContext, useEffect} from "react"
import { UserContext } from "../context/UserContext"


const ItemNew = ({globalDesigners}) =>{
    const {user, setUser} = useContext(UserContext)
    const initialItemState = {name: '', color: '', size: '', stock: '', user_id: user.id, designer_id: ''}
    const initialDesignerState = {name:'', id:''}
  
    const [newItem, setNewItem] = useState(initialItemState)
    const [newDesigner, setNewDesigner] = useState(initialDesignerState)
    const [allDesigners, setAllDesigners] = useState(initialDesignerState)
    const [errors, setErrors] = useState()
    const [errorsItem, setErrorsItem] = useState()
    const [isSaved, setIsSaved] = useState(false)



//******************************************* */ ITEM FUNCTIONALITY

    function updateItem(e){
        setNewItem({...newItem, [e.target.name]: e.target.value })}

    function createItem (e, desRouteId){
    e.preventDefault()
    console.log("desroute", desRouteId)
        let designerId
        if (desRouteId !== undefined)
        {designerId = desRouteId}
        else
        {designerId = newItem.designer_id}

        fetch("/items", {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                name: newItem.name,
                color: newItem.color,
                size: newItem.size,
                stock: newItem.stock,
                designer_id: designerId,
                user_id: newItem.user_id})})
                .then((r) => {if (r.ok){r.json().then((r) => {newItemState(r); resetState(); setIsSaved(true);designerState({name: r.designer.name, id: r.designer.id}); console.log("create des res", r.designer.name)})}
                else
                {r.json().then((r) => alert(r.errors))}
            })}
                
    function newItemState(i){
        let itemsArray = user.items
                itemsArray.push(i)
                     let updatedUser = {...user, items: itemsArray}
                        setUser(updatedUser)}

function resetState(){
    setNewItem(initialItemState)
    setNewDesigner(initialDesignerState)}


//******************************************* */ DESIGNER FUNCTIONALITY

function addDesigner(e){
e.preventDefault()
    fetch("/designers", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            name: newDesigner.name})})
            .then((r) => {
                if (r.ok)
                {r.json().then((r) => {designerState(r); handoffDesigner(r,e)})}
                 else
                {r.json().then((r) => {alert(r.errors); setNewDesigner(initialDesignerState)})}})}

console.log("errors", errors, errorsItem)

    function handoffDesigner(r,e){
        createItem(e, r.id)
    }

    function designerState(newDesigner){

        let desArray = user.designers
        let desMap = desArray.map((des) => des.id)
        console.log("des mAp", desMap)
        if(desMap.includes(newDesigner.id))
        {return null}
        else
         {  desArray.push(newDesigner)
            let updatedUser = {...user, designers: desArray}
            setUser(updatedUser)}
    }

    function designerPop(e){
        setNewDesigner({name: e.target.value})
    }

   

function saveRoute(e){

    if (newItem.name === '')
    {alert("Please inclue item name.")}
    else
    {if (newItem.designer_id !== "" && newDesigner.name !== "")
         {{alert("Please either select a designer, or add a new designer."); setNewDesigner(initialDesignerState); setNewItem({...newItem, name: "", designer_id: ""})}}
        else{
        if (newItem.designer_id === "")
        {addDesigner(e)}
         else
        {createItem(e)}}}}

        function dropDownUnselect(){
            if(newDesigner.name !== "")
            {setNewItem({...newItem, designer_id: ""})}
        }

let designerMap = user.designers?.map((designer) =>  <option name="designer_id" value={designer.id}>{designer.name}</option>)
let globalDesignerMap = globalDesigners?.map((designer) => <option name="designer_id" value={designer.id}>{designer.name}</option>)

    return(

        <div className="add-page">

        {isSaved? <div className="item-saved-container"><p>SAVED</p>

        <button id="add-another" className="s-e-d-buttons" onClick={() => setIsSaved(false)}>add another</button>
        
        </div> : 


<div className="add-component-container"> 
<p>Add Item</p>
        <div className="item-add-container">
            <input name="name" value={newItem.name} className="edit-input" placeholder="Coat" onChange={updateItem}/>
            <input name="color" value={newItem.color} className="edit-input" placeholder="Color" onChange={updateItem}/>
            <input name="size" value={newItem.size} className="edit-input" placeholder="Size" onChange={updateItem}/>
            <input name="stock"value={newItem.stock}  className="edit-input" placeholder="Stock" onChange={updateItem}/>
            <p style={{fontSize: "12px"}}>Choose one of the following options</p>
            <div className="designer-options-container">
           
                <div className="dropdown-first-container">
                    <div className="designer-dropdown">
                        <p style={{fontSize: "12px"}}>- All designers -</p>
                        <select className="edit-input" name="designer_id" value={newItem.designer_id} onChange={updateItem}>
                            <option value="" defaultValue selected={true} >-Select Designer-</option>
                            {globalDesignerMap}
                        </select>
                    </div>
                    <div className="designer-dropdown">
                        <p style={{fontSize: "12px"}}>- Or add new designer -</p>
                        <input className="edit-input" name="name" value={newDesigner.name} placeholder="Enter new designer name" onChange={(e) => {designerPop(e); dropDownUnselect()}}/>
                     </div>
                </div>
                
            </div>
               
                <div className="s-e-d-buttons-container">
                    <button className="s-e-d-buttons" onClick={(e) => saveRoute(e)}>save</button>
                    <button className="s-e-d-buttons">clear</button>
                </div>
              
            </div>
            </div>
    
        }
</div>
    )
}

export default ItemNew