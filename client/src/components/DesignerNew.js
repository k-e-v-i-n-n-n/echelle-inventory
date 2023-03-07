// import {useState, useContext} from "react"
// import { UserContext } from "../context/UserContext"

// const DesignerNew = () => {
// const [newDesigner, setNewDesigner] = useState({name:""})
// const {user, setUser} = useContext(UserContext)

// console.log("user", user)

// function addDesigner(){

//     fetch("/designers", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({
//             name: newDesigner.name})})
//             .then((r) => r.json())
//             .then((r) => {console.log("new des res", r); designerState(r)})
// }

// console.log("new designer", newDesigner)

// function designerState(newDesigner){

//     let desArray = user.designers
//     console.log("des array", desArray)
//         desArray.push(newDesigner)
//     let updatedUser = {...user, designers: desArray}
//     setUser(updatedUser)

// }

// function designerPop(e){
//     setNewDesigner({name: e.target.value})
// }

//     return(
//         <div className="add-designer-container">
//             <input className="edit-input" name="name" value={newDesigner.name} placeholder="Enter designer name..." onChange={(e) => designerPop(e)}/>
//             <div className="s-e-d-buttons-container">
//                 <button className="s-e-d-buttons" onClick={() => addDesigner()}>save</button>
//                 <button className="s-e-d-buttons">clear</button>
//                 </div>
//         </div>

//     )
// }

// export default DesignerNew