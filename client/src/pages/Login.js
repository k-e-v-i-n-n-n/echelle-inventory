import {useState, useContext} from "react"
import {UserContext} from "../context/UserContext.js"



const Login = () => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [isSignUp, setIsSignup] = useState(false)

    const {user, setUser} = useContext(UserContext)
   

const newSignUp = (e) =>{

    e.preventDefault()
    console.log("submitted")

    fetch("/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(
        {username, password, password_confirmation: passwordConfirmation}
      ),
    })
    .then((r) =>r.json())
    .catch((err) => console.log(err))
    .then((r) => {console.log(r); setUser(r)})

}

function condRend(e){
    e.preventDefault()
    setIsSignup(!isSignUp)
}

return(

    <div className="login-container">

        <form className="login-form">

            <label className="login-labels">Showroom</label>
            <input value={username} type="text" placeholder="kevin@echelle.com" onChange={(e) => setUserName(e.target.value)} />
            <label className="login-labels">Password</label>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          
            {isSignUp && <label className="login-labels">Confirm Password</label>}
            {isSignUp && <input value={passwordConfirmation} type="password" onChange={(e) => setPasswordConfirmation(e.target.value)}/>}  

                <div className="login-button-container">

                    {isSignUp ? <button className="login-buttons" type="submit" onClick={(e) => newSignUp(e)} >Submit</button> : <button className="login-buttons" type="submit">Login</button> }
                    {!isSignUp &&< button className="login-buttons" type="submit" onClick={(e) => condRend(e)}>Create Account</button> }
                    {isSignUp &&< button className="login-buttons" id="cancel" onClick={(e) => condRend(e)}>Cancel</button> }
                </div>

        </form>
        
        
    
    </div>

)

}

export default Login