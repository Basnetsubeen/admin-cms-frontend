import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setModalShow } from "../../pages/system-state/SystemSlice";

export const CustomModal = ({ title, children }) => {
  const { modalShow } = useSelector((state) => state.system);
  const dispatch = useDispatch();
  return (
    <Modal
      show={modalShow}
      onHide={() => dispatch(setModalShow(false))}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => dispatch(setModalShow(false))}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
