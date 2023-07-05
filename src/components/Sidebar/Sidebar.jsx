import { useState } from "react"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import "./Sidebar.css"

const links = [
  { name: "Home", url: "/", id: 1 },
  { name: "Temperature", url: "/temperature", id: 2 },
  { name: "Carbon Dioxide", url: "/co2", id: 3 },
  { name: "Methane", url: "/methane", id: 4 },
  { name: "Nitrous Oxide", url: "/nitrous-oxide", id: 5 },
  { name: "Polar Ice", url: "/arctic", id: 6 },
]

const activeStyle = {
  textDecoration: "underline",
  color: "#535bf2",
}

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
}

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
}

const Sidebar = () => {
  const defaultValue = window.innerWidth > 768 ? true : false
  const [open, setOpen] = useState(defaultValue)

  return (
    <>
      <div className="sidebar">
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{ width: 240 }}
              exit={{
                width: 0,
                transition: { delay: 0.8, duration: 0.3 },
              }}
            >
              <motion.div className="menu-container" initial="closed" animate="open" exit="closed" variants={sideVariants}>
                {links.map(({ name, url, id }) => (
                  <NavLink to={url} key={id} style={({ isActive }) => (isActive ? activeStyle : null)}>
                    <motion.div variants={itemVariants}>{name}</motion.div>
                  </NavLink>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
        <div className="btn-container">
          <button onClick={() => setOpen(!open)}>{open ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}</button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
