import { Link } from "react-router-dom"
import { AnimatePresence, motion, useCycle } from "framer-motion"

const links = [
  { name: "Home", url: "/", id: 1 },
  { name: "Temperature", url: "/temperature", id: 2 },
  { name: "Carbon Dioxide", url: "#", id: 3 },
  { name: "Methane", url: "#", id: 4 },
  { name: "Nitrous Oxide", url: "#", id: 5 },
  { name: "Polar Ice", url: "#", id: 6 },
]

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
  const [open, cycleOpen] = useCycle(defaultValue, !defaultValue)

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
                  <Link to={url} key={id}>
                    <motion.div variants={itemVariants}>{name}</motion.div>
                  </Link>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
        <div className="btn-container">
          <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
        </div>
      </div>
    </>
  )
}

export default Sidebar
