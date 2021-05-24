//https://github.com/reactjs/react-modal
import Modal from "react-modal";
import "./modal.css";

const GModal = (props) => {
  return (
    <Modal isOpen={props.show} className={props.className} overlayClassName="Overlay">
      <div className="col-12 text-right">
        <span role="button" onClick={props.handleClose}>
          ❌
        </span>
      </div>
      {props.children}
    </Modal>
  );
};

export default GModal;
