import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import useOutsideClick from "../../hooks/useOutsideClick"
import styles from "./Sidebar.module.css"

const links = [
  { name: "Home", url: "/", id: 1 },
  { name: "Temperature", url: "/temperature", id: 2 },
  { name: "Carbon Dioxide", url: "/co2", id: 3 },
  { name: "Methane", url: "/methane", id: 4 },
  { name: "Nitrous Oxide", url: "/nitrous-oxide", id: 5 },
  { name: "Polar Ice", url: "/arctic", id: 6 },
]

const activeStyle = {
  color: "#aacddf",
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
  const ref = useRef()

  useOutsideClick(ref, () => {
    if (window.innerWidth < 769) {
      setOpen(false)
    }
  })

  return (
    <>
      <div className={styles.sidebar} ref={ref}>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{ width: 240 }}
              exit={{
                width: 0,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className={styles.menu}
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map(({ name, url, id }) => (
                  <NavLink
                    to={url}
                    key={id}
                    style={({ isActive }) => (isActive ? activeStyle : null)}
                  >
                    <motion.div variants={itemVariants}>{name}</motion.div>
                  </NavLink>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
        <div className={styles.btnWrapper}>
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <i className={`${styles.icons} bx bx-x`}></i>
            ) : (
              <i className={`${styles.icons} bx bx-menu`}></i>
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
