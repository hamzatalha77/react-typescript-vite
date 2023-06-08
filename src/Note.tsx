import { Badge, Button, Col, Row, Stack } from 'react-bootstrap'
import { useNote } from './NoteLayout'
import { Link } from 'react-router-dom'
const Note = () => {
  const note = useNote()

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flew-wrap">
              {note.tags.map((tag) => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="outline-danger">Delete</Button>
            <Button variant="outline-secondary">Back</Button>
          </Stack>
        </Col>
      </Row>
    </>
  )
}

export default Note
