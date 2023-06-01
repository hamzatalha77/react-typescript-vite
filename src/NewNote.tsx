import { Form, Stack, Row, Col } from 'react-bootstrap'
import CreatableReactSelect from 'react-select/creatable'
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
              {/* <Form.Select required /> */}
              <CreatableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" rows={15} />
        </Form.Group>
      </Stack>
    </Form>
  )
}

export default NewNote
