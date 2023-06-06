import { SimplifiedNote } from './interface/FromInterface'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './NoteList.modules.css'

const NoteCard = ({ id, title, tags }: SimplifiedNote) => {
  return (
    <Card
      as={Link}
      to={`/${id}`}
      className={`h-100 text-reset text-decoration-none ${styles.card}`}
    >
      <Card.Body></Card.Body>
    </Card>
  )
}

export default NoteCard
