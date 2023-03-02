import avatar from "../images/female-profile.png"
import {useContext} from "react"
import {Link} from "react-router-dom"
import {UserContext} from "../context/UserContext.js"



const Header = () => {

    const {user, setUser} = useContext(UserContext)
   

    function logout (){

        fetch("/logout",
        {
        method: "DELETE"
        })
        .then(() => {console.log("logged out");setUser("") })
    }

 

    return (
        <header>
            <div className="header-level-1">
                <div className="header-item-container">
                        <Link to="/">
                        <h1 id="logo-text">échelle</h1>
                        </Link>
                </div>

                <div className="header-item-container"> 
                    <Link to="/login">

                        {user ? <p>{user.username}</p> : <p>Login</p>  }
               
                    </Link>
                    <img className="avatar" src={avatar} />
                    {user && <button id="logout-button" onClick={() => logout()}>Logout</button>}
                </div>

                

            </div>
            <ul className="header-level-2">
                    <Link to="/inventory">
                    <li>Inventory</li>
                    </Link>
                    <Link to="/designers">
                    <li>Designers</li>
                    </Link>
                    <li>Add/Edit</li>
                
            </ul>

        </header>


    )

}

export default Header 