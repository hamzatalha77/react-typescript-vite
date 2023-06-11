import { Button, Col, Modal, Row, Stack } from 'react-bootstrap'
import { Form } from 'react-router-dom'
import { EditTagsModalProps } from './interface/FromInterface'

const EditTagsModal = ({
  availableTags,
  show,
  handleClose,
}: EditTagsModalProps) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control type="text" value={tag.lable} />
                </Col>
                <Col xs="auto">
                  <Button variant="outline-danger">&times;</Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default EditTagsModal
