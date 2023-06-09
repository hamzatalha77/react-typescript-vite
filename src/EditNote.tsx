import NewForm from './NewForm'
import { NoteData, Tag } from './interface/FromInterface'

export type EditNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}
const EditNote = ({ onSubmit, onAddTag, availableTags }: EditNoteProps) => {
  return (
    <div>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </div>
  )
}

export default EditNote
