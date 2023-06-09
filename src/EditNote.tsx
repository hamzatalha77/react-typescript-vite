import NewForm from './NewForm'
import { useNote } from './NoteLayout'
import { NoteData, Tag } from './interface/FromInterface'

export type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}
const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
  const note = useNote()
  return (
    <div>
      <h1 className="mb-4">Edit Note</h1>
      <NewForm
        title={note.title}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  )
}

export default EditNote
