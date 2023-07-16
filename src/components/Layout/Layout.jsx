import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"
import styles from "./Layout.module.css"

const Layout = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout
