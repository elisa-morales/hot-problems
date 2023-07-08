import Resources from "../Resources/Resources"
import Credits from "../Credits/Credits"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="heading content">
        <h2>
          Girls are hot.
          <br />
          Guys are hot.
          <br />
          <span>Why is everyone so hot?</span>
        </h2>
        <br />
        <h2>🔥 Global warming 🔥</h2>
      </div>
      <div className="subheading content">
        <p>
          The <span>current global warming rate is not natural</span>. From 1880
          to 1981 was (0.07°C / 0.13°F) per decade. Since 1981 this rate has{" "}
          <span>increased</span> to (0.18°C / 0.32°F).
        </p>
        <br />
        <p>
          Explore our site for <span>real-time data</span> and graphs on global
          warming's impact.
        </p>
      </div>
      <Resources />
      <Credits />
    </div>
  )
}

export default Hero
