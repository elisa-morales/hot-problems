import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heading content">
        <h2>
          Girls are hot, guys are hot.
          <br />
          <span>Why is everyone so hot?</span>
        </h2>
        <br />
        <br />
        <h2>🔥 Global warming 🔥</h2>
      </div>
      <div className="subheading content">
        <p>
          The <span>current global warming rate is not natural</span>. From 1880 to 1981 was (0.07°C / 0.13°F) per decade. Since 1981 this rate has <span>increased</span> to (0.18°C / 0.32°F).
        </p>
        <br />
        <p>
          Explore our site for <span>real-time data</span> and graphs on global warming's impact.
        </p>
      </div>
      <div className="resources content">
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature" target="_blank">
              Climate Change: Global Temperature
            </a>
          </li>

          <li>
            <a href="https://climate.nasa.gov/climate_resources/24/graphic-the-relentless-rise-of-carbon-dioxide/" target="_blank">
              The relentless rise of carbon dioxide
            </a>
          </li>

          <li>
            <a href="https://earthobservatory.nasa.gov/images/146978/methane-emissions-continue-to-rise" target="_blank">
              NASA: Methane Emissions Continue to Rise
            </a>
          </li>

          <li>
            <a href="https://www.epa.gov/ghgemissions/overview-greenhouse-gases#nitrous-oxide" target="_blank">
              EPA: Nitrous Oxide Emissions
            </a>
          </li>

          <li>
            <a href="https://www.npolar.no/en/themes/climate-change-in-the-arctic/" target="_blank">
              Climate change in the Arctic
            </a>
          </li>
        </ul>
      </div>
      <div className="credits content">
        <h2>Credits</h2>
        <p>&#169; Elisa Morales</p>
        <a href="https://www.linkedin.com/in/elisa-morales-dev/" target="_blank" title="LinkedIn">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://github.com/elisa-morales" target="_blank" title="GitHub">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://talent.start2impact.it/profile/elisa-morales" target="_blank" title="start2impact University">
          <i className="bx bx-rocket"></i>
        </a>
        powered by{" "}
        <a href="https://global-warming.org/" target="_blank">
          Global Warming API
        </a>
      </div>
    </div>
  )
}

export default Hero
