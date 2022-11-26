import React from "react";
import NoteContext from "../contextApi/NoteContext";
import { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const Logout = () => {
  const data_Logout = useContext(NoteContext);
  const { smShow, setSmShow } = data_Logout;
  const handleConfirm = () => {
    localStorage.clear();
    setSmShow(false);
    window.location.href = "/";
  };

  return (
    <>
      {/* <Button onClick={toggleShowA} className="mb-2">
        Toggle Toast <strong>with</strong> Animation
      </Button> */}
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">LogOut</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out</Modal.Body>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2px",
          }}
        >
          <Button onClick={handleConfirm} variant="success">
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Logout;
