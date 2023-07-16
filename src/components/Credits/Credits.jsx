import styles from "./Credits.module.css"

const Credits = () => {
  return (
    <div className={styles.credits}>
      <h2>Credits</h2>
      <div className={styles.social}>
        <p>&#169; Elisa Morales</p>
        <a
          href="https://www.linkedin.com/in/elisa-morales-dev/"
          target="_blank"
        >
          <i className="bx bxl-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/elisa-morales" target="_blank">
          <i className="bx bxl-github"></i> GitHub
        </a>
        <a
          href="https://talent.start2impact.it/profile/elisa-morales"
          target="_blank"
        >
          <i className="bx bx-rocket"></i> start2impact University
        </a>
      </div>
      <div>
        <br />
        <p>
          powered by{" "}
          <a href="https://global-warming.org/" target="_blank">
            Global Warming API
          </a>
        </p>
      </div>
    </div>
  )
}

export default Credits
