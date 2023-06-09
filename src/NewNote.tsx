import NewForm from './NewForm'
import { NoteData, Tag } from './interface/FromInterface'

export type NoteFormProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
} & NoteData
const NewNote = ({ onSubmit, onAddTag, availableTags }: NoteFormProps) => {
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
