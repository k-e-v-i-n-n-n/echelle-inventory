import {Routes, Route, BrowserRouter, useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from "react"
import Header from './components/Header'
import Landing from './pages/Landing'
import Designers from './pages/Designers'
import Login from './pages/Login'
import Inventory from "./pages/Inventory"
import {UserContext, UserProvider} from "./context/UserContext.js"
// export const ContextComp = createContext()

const App = () => {

  // const [user, setUser] = useState()
  // const {user, setUser} = useContext(UserContext)
  let navigate = useNavigate()

  // useEffect(() =>{
  //   fetch("/me")
  //   .then((r) => {

  //     if (r.ok){
  //     r.json().then((r)=> setUser(r))
  //     }
  //     else
  //     {
  //     navigate("/login")}
  //   })


  // }, [])



  return (
    <>
      {/* <ContextComp.Provider value={{user, setUser}}> */}
      <UserProvider>
        <Header/>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/designers" element={<Designers/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/inventory" element={<Inventory/>}/>
          </Routes>
          </UserProvider>
        {/* </ContextComp.Provider> */}
      </>

    )
}

export default App
