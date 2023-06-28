import { Link } from "react-router-dom"
import { AnimatePresence, motion, useCycle } from "framer-motion"

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "Temperature", to: "/temperature", id: 2 },
  { name: "Carbon Dioxide", to: "#", id: 3 },
  { name: "Methane", to: "#", id: 4 },
  { name: "Nitrous Oxide", to: "#", id: 5 },
  { name: "Polar Ice", to: "#", id: 6 },
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
      staggerChildren: 0.2,
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
      <main>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{ width: 300 }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div className="menu-container" initial="closed" animate="open" exit="closed" variants={sideVariants}>
                {links.map(({ name, to, id }) => (
                  <Link to={to} key={id} href={to}>
                    <motion.div variants={itemVariants}>{name}</motion.div>
                  </Link>
                ))}
                <motion.p variants={itemVariants}>credits</motion.p>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
        <div className="btn-container">
          <button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
        </div>
      </main>
    </>
  )
}

export default Sidebar
