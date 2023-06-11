export type Note = {
  id: string
} & NoteData
export type RawNote = {
  id: string
} & RawNoteData
export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}
export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}
export type Tag = {
  id: string
  label: string
}
export type NoteListProps = {
  availableTags: Tag[]
  notes: SimplifiedNote[]
  onUpdateTag: (id: string, label: string) => void
  onDeleteTag: (id: string) => void
}
export type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}
export type NoteLyoutProps = {
  notes: Note[]
}
export type NoteProps = {
  onDelete: (id: string) => void
}
export type EditTagsModalProps = {
  show: boolean
  availableTags: Tag[]
  handleClose: () => void
  onUpdateTag: (id: string, label: string) => void
  onDeleteTag: (id: string) => void
}
