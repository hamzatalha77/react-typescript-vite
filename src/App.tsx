import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { useMemo } from 'react'
import NewNote from './NewNote'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { useLocalStorage } from './useLocalStorage'
import { NoteData, RawNote, Tag } from './interface/FromInterface'
import { v4 as uuidV4 } from 'uuid'
import NoteList from './NoteList'
import { NoteLayout } from './NoteLayout'
import Note from './Note'
import EditNote from './EditNote'
const App = () => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>('NOTES', [])
  const [tags, setTags] = useLocalStorage<Tag[]>('TAGS', [])

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      }
    })
  }, [notes, tags])
  const onCreateNote = ({ tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ]
    })
  }
  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...data,
            id: uuidV4(),
            tagIds: tags.map((tag) => tag.id),
          }
        } else {
          return note
        }
      })
    })
  }
  const addTag = (tag: Tag) => {
    setTags((prev) => [...prev, tag])
  }
  return (
    <Container>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<NoteList notes={notesWithTags} availableTags={tags} />}
          />
          <Route
            path="/new"
            element={
              <NewNote
                onSubmit={onCreateNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
          <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
            <Route index element={<Note />} />
            <Route
              path="edit"
              element={
                <EditNote
                  onSubmit={onUpdateNote}
                  onAddTag={addTag}
                  availableTags={tags}
                />
              }
            />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </Container>
  )
}

export default App
