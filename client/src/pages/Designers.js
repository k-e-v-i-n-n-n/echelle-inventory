import {useContext} from "react"
import {UserContext} from "../context/UserContext"
import Designer from "../components/Designer"


const Designers = ({designers}) => {

    const {user} = useContext(UserContext)

    let designerMap = designers?.map((designer) => <Designer designer={designer} />)

    return(
        <>
        {user?  <div className="designers-page">
            <p className="instructions">Click a designer to see their items</p>
            {designerMap}
        </div> 
        :   <div className="landing-page">
                <p>Please Login</p> 
            </div>}
        </>
    )
}

export default Designers