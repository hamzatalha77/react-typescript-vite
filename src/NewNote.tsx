import { Form, Stack, Row, Col } from 'react-bootstrap'

const NewNote = () => {
  return (
    <Form>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Select required />
            </Form.Group>
          </Col>
        </Row>
        <Col>
          <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Select required as="textarea" rows={15} />
          </Form.Group>
        </Col>
      </Stack>
    </Form>
  )
}

export default NewNote
