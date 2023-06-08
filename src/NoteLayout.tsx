import { Navigate, Outlet, useOutletContext, useParams } from 'react-router-dom'
import { Note, NoteLyoutProps } from './interface/FromInterface'

export const NoteLayout = ({ notes }: NoteLyoutProps) => {
  const { id } = useParams()
  const note = notes.find((n) => n.id === id)
  if (note == null) return <Navigate to="/" replace />
  return <Outlet context={note} />
}

export const useNote = () => {
  return useOutletContext<Note>()
}
