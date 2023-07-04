import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import "./Layout.css"

const Layout = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout