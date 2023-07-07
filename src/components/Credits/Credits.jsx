import "./Credits.css"

const Credits = () => {
  return (
    <div className="credits">
      <h2>Credits</h2>
      <p>&#169; Elisa Morales</p>
      <div className="social">
        <a href="https://www.linkedin.com/in/elisa-morales-dev/" target="_blank">
          <i className="bx bxl-linkedin"></i> LinkedIn
        </a>
        <a href="https://github.com/elisa-morales" target="_blank">
          <i className="bx bxl-github"></i> GitHub
        </a>
        <a href="https://talent.start2impact.it/profile/elisa-morales" target="_blank">
          <i className="bx bx-rocket"></i> start2impact University
        </a>
      </div>
      <br />
      powered by{" "}
      <a href="https://global-warming.org/" target="_blank">
        Global Warming API
      </a>
    </div>
  )
}

export default Credits
