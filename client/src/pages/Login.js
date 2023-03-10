import {useState, useContext} from "react"
import {UserContext} from "../context/UserContext.js"
import { useNavigate } from "react-router-dom"

const Login = ({}) => {

    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [isSignUp, setIsSignup] = useState(false)
    const [errors, setErrors] = useState([])

    const {user, setUser} = useContext(UserContext)
    let navigate = useNavigate()
   
    const newSignUp = (e) =>{
        e.preventDefault()
            fetch("/signup", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(
                    {username, password, password_confirmation: passwordConfirmation}
                ),
                })
            .then((r) => {handleResponse(r)})}
        
const logIn = (e) => {
e.preventDefault()
fetch("/login",  {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(
        {username, password}
    ),
})
.then((r) => handleResponse(r))
}

function handleResponse(r){
    if(r.ok)
    {r.json().then((r) => {setUser(r); navigate("/")})}
    else 
    {r.json().then((err) => {setErrors(err.errors)})}
}

function clearErr(){
    setErrors([])
    clearForm()
}

function clearForm() {

    setUserName("")
    setPassword("")
    setPasswordConfirmation("")
}

function condRend(e){
    e.preventDefault()
    setIsSignup(!isSignUp)
}

return(

    <div className="login-container">
        <form className="login-form">
            <label className="login-labels">Showroom</label>
            <input value={username} type="text" placeholder="kevin@echelle.com" onChange={(e) => {clearErr(); setUserName(e.target.value)}} />
            <label className="login-labels">Password</label>
            <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          
            {isSignUp && <label className="login-labels">Confirm Password</label>}
            {isSignUp && <input value={passwordConfirmation} type="password" onChange={(e) => setPasswordConfirmation(e.target.value)}/>}  
                <div>
                    {errors?.map((err) => <p key={err} id="error-username">{err}</p>)}
                </div>
                <div className="login-button-container">
                    {isSignUp ? <button className="login-buttons" type="submit" onClick={(e) => newSignUp(e)} >Submit</button> : <button className="login-buttons" type="submit" onClick={(e) => logIn(e)} >Login</button> }
                    {!isSignUp &&< button className="login-buttons" type="submit" onClick={(e) => {condRend(e); setErrors([])} }>Create Account</button> }
                    {isSignUp &&< button className="login-buttons" id="cancel" onClick={(e) => {condRend(e); clearErr()}}>Cancel</button> }
                </div>
        </form>
    </div>
)

}

export default Login