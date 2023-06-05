import { Button, Col, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NoteList = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="primary">Create</Button>
              <Button variant="outline-secondary">Edit Tags</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
    </>
  )
}

export default NoteList
