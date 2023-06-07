import { useParams } from 'react-router-dom'
import { NoteLyoutProps } from './interface/FromInterface'

const NoteLayout = ({ notes }: NoteLyoutProps) => {
  const { id } = useParams()
  const note = notes.find((n) => n.id === id)
}

export default NoteLayout
