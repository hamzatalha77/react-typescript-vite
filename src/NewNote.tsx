import React from 'react'
import NewForm from './NewForm'
import { NoteData } from './interface/FromInterface'

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
}
const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <div>
      <h1 className="mb-4">New Note</h1>
      <NewForm onSubmit={onSubmit} />
    </div>
  )
}

export default NewNote
