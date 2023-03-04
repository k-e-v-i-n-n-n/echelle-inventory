import {useContext} from "react"
import {UserContext} from "../context/UserContext"
import Designer from "../components/Designer"


const Designers = () => {

    const {user} = useContext(UserContext)

    let designerMap = user.designers?.map((designer) => <Designer key={designer.id} designer={designer} />)

    return(

        <div className="designers-page">
            {designerMap}
        </div>

    )
}

export default Designers