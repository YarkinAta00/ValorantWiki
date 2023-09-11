import { Route, useLocation } from "react-router-dom"
import { Routes } from "react-router-dom"
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Agents from './pages/Agents'
import Weapons from './pages/Weapons'
import Maps from './pages/Maps'
import Home from './pages/Home'
import AgentDetails from './pages/Details/AgentDetails'
import WeaponDetails from "./pages/Details/WeaponDetails"
import MapsDetails from "./pages/Details/MapsDetails"
import Register from "./pages/Register"

function App() {
  // Get the current location.
  const location = useLocation();

  // Check if the current path is "/"
  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/";

  return (
    <>
    {isLoginPage ||isRegisterPage ? null : <Navbar/>}
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/agentdetail/:id" element={<AgentDetails />} />
        <Route path="/weapondetail/:id" element={<WeaponDetails />} />
        <Route path="/mapdetail/:id" element={<MapsDetails />} />
      </Routes>
    </>
  )
}

export default App
