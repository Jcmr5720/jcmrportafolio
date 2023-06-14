import { AiFillHeart} from "react-icons/ai";
import Toast from 'react-bootstrap/Toast';

function BasicExample() {
  return (
    <Toast>
      <Toast.Header>
        <AiFillHeart className="rounded me-2" />
        <strong className="me-auto">Yo amo REACT</strong>
        <small>Notificación</small>
      </Toast.Header>
      <Toast.Body>Hola mundo :)</Toast.Body>
    </Toast>
  );
}

export default BasicExample;