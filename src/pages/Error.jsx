import { Link } from "react-router-dom"

const Error = ({ message }) => {
  return (
    <div className="page-wrapper">
      <div className="error-content">
        <h2>{message}</h2>
        <Link to="/">
          <button className="error-btn">Return to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Error
