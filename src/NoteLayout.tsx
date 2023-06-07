import { useParams } from 'react-router-dom'
import { NoteLyoutProps } from './interface/FromInterface'

const NoteLayout = ({ notes }: NoteLyoutProps) => {
  const { id } = useParams()
}

export default NoteLayout
