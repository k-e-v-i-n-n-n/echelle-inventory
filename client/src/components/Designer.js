import { UserContext } from "../context/UserContext"
import { useContext } from "react"
import {Link, useNavigate} from "react-router-dom"

const Designer = ({designer}) => {

    const {user, setUser} = useContext(UserContext)
    let {name, id} = designer
    const navigate = useNavigate()

function designerDelete() {

    fetch(`/delete/${user.id}`, {
        method:"DELETE",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({
            designer_id: id})})
            .then((r) => {
            if(r.ok)
            {desStateUpdate(); navigate("/designers")}
            else
            {}
            

        })}

    function desStateUpdate(){
        let desFiltered = user.designers.filter((des) => des.id !== id)
        let itemsFiltered = user.items.filter((item) => item.designer_id !== id)
        let updatedUser = {...user, designers: desFiltered, items: itemsFiltered}
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