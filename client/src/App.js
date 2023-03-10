import {Routes, Route, BrowserRouter, useNavigate, useParams} from 'react-router-dom'
import {useState, useEffect, useContext} from "react"
import Header from './components/Header'
import Landing from './pages/Landing'
import Designers from './pages/Designers'
import Login from './pages/Login'
import Inventory from "./pages/Inventory"
import Add from "./pages/Add"
import DesignerInventory from './pages/DesignerInventory'
import {UserContext} from "./context/UserContext.js"


const App = () => {
  const [designers, setDesigners] = useState()
  const [items, setItems] = useState()
  const [globalDesigners, setGlobalDesigners] = useState()
  console.log("global", globalDesigners)

  const {user, setUser} = useContext(UserContext)
  let navigate = useNavigate()
console.log("this is user", user)


  useEffect(() =>{
    fetch("/me")
    .then((r) => {
      if (r.ok){
      r.json().then((r) => {console.log("auth is working!!"); setUser(r)})
      }
      else
      {
      navigate("/login")}})}, [])

// *************************************************** Global State Updates

useEffect(() => {
  setDesigners(user?.designers)
  setItems(user?.items)
}, [user])

useEffect(() => {

  fetch('/designers', {
      method: "GET"
  })
  .then((r) =>r.json()).then((r) => setGlobalDesigners(r))
}, [designers])

// *************************************************** 

  return (
    <>
        <Header/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/designers" element={<Designers  designers={designers} />}/>
            <Route path="/designers/:id" element={<DesignerInventory globalDesigners={globalDesigners} items={items} designers={designers}/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/inventory" element={<Inventory setItems={setItems} items={items} />}/>
            <Route path="/add" element={<Add globalDesigners={globalDesigners}/>}/>
            
          </Routes>
      </>

    )
}

export default App
