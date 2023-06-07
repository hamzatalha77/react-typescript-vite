import { Navigate, Outlet, useParams } from 'react-router-dom'
import { NoteLyoutProps } from './interface/FromInterface'

const NoteLayout = ({ notes }: NoteLyoutProps) => {
  const { id } = useParams()
  const note = notes.find((n) => n.id === id)
  if (note == null) return <Navigate to="/" replace />
  return <Outlet />
}

export default NoteLayout
