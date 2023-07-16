import { paragraph } from "../../data/dataParagraph"
import styles from "./Paragraph.module.css"

const Paragraph = ({ id }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{paragraph[id].title}</h2>
      <p className={styles.text}>{paragraph[id].text}</p>
    </div>
  )
}

export default Paragraph
