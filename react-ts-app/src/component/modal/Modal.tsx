import React from "react";
import { setModalContentValues } from "types";
import classes from "./Modal.module.css";
interface ModalProps {
  active: boolean;
  setActive: (value: boolean) => void;
  modalContent: setModalContentValues;
}
function Modal({ active, setActive, modalContent }: ModalProps) {
  return (
    <div
      className={active ? classes.active + " " + classes.modal : classes.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="">{modalContent.title}</div>
        <div>Brand:{modalContent.brand}</div>
        <div className="">{modalContent.description}</div>
        <div className="">Price:{modalContent.price}$</div>
        <div className={classes.imagesContainer}>
          {modalContent.images
            ? modalContent.images.map((el: string, index: number) => (
                <div
                  className={classes.image}
                  style={{ backgroundImage: `url(${el})` }}
                  key={index}
                ></div>
              ))
            : ""}
        </div>
      </div>
      <div className={classes.modalClose} onClick={() => setActive(false)}>
        X
      </div>
    </div>
  );
}

export default Modal;
