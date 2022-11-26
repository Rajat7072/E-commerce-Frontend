import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Row";
import Row from "react-bootstrap/Row";
import NoteContext from "../contextApi/NoteContext";
import { useContext } from "react";

const Basicdropdown = () => {
  const { setQty } = useContext(NoteContext);
  const handleText = (e) => {
    setQty(e.target.value);
  };

  return (
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState" onChange={handleText}>
          <Form.Select defaultValue="1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Form.Select>
        </Form.Group>
      </Row>
    </>
  );
};

export default Basicdropdown;
