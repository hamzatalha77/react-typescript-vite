import { Col, Row, Stack } from 'react-bootstrap'

const NoteList = () => {
  return (
    <>
      <Row>
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal"></Stack>
        </Col>
      </Row>
    </>
  )
}

export default NoteList
