import { paragraph } from "../../data/dataParagraph"
import "./Paragraph.css"

const Paragraph = ({ id }) => {
  return (
    <div className="paragraph-container">
      <h2 className="title">{paragraph[id].title}</h2>
      <p className="text">{paragraph[id].text}</p>
    </div>
  )
}

export default Paragraph
