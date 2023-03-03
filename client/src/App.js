import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from "react"
import Header from './components/Header'
import Landing from './pages/Landing'
import Designers from './pages/Designers'
import Login from './pages/Login'
import Inventory from "./pages/Inventory"
import Add from "./pages/Add"
import {UserContext, UserProvider} from "./context/UserContext.js"


const App = () => {
  const {user, setUser} = useContext(UserContext)
  let navigate = useNavigate()


  useEffect(() =>{
    fetch("/me")
    .then((r) => {

      if (r.ok){
      r.json().then((r) => {console.log("auth is working!!"); setUser(r)})
      }
      else
      {
      navigate("/login")}
    })

  }, [])



  return (
    <>
        <Header/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/designers" element={<Designers/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route path="/add" element={<Add/>}/>
          </Routes>
      </>

    )
}

export default App
