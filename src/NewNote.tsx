import React from 'react'
import NewForm from './NewForm'
import { NoteData, Tag } from './interface/FromInterface'

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}
const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <div>
      <h1 className="mb-4">New Note</h1>
      <NewForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  )
}

export default NewNote
