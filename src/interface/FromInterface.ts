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
export type NoteList = {
  availableTags: Tag[]
  notes: SimplifiedNote[]
}
export type SimplifiedNote = {
  tags: Tag[]
  title: string
  id: string
}
export type NoteLyout = {
  notes: Note[]
}
