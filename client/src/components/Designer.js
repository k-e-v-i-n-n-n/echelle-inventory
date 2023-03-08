import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import {Link} from "react-router-dom"

const Designer = ({designer}) => {

    const {user, setUser} = useContext(UserContext)
    let {name, id} = designer

function designerDelete(){
    fetch(`/designers/${id}`,{
        method:"DELETE"})
        .then(() => desStateUpdate())}

function desStateUpdate(){
    let desFiltered = user.designers.filter((des) => des.id !== id)
    let updatedUser = {...user, designers: desFiltered}
    setUser(updatedUser)}

return(
    <div key={id} className="designer-container">
        <Link to={`/designers/${id}`}>
        <p className="designer-name">{name}</p>
        </Link>
        <button className={"designer-delete"} onClick={designerDelete}>x</button>
    </div>
)}

export default Designer