import { useRef, useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "../../redux/contacts/operations";
import EditContactModal from "../Modal/EditContactModal";
import s from "./Contact.module.css";

function Contact({ contact: { name, number, id } }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const contactIdRef = useRef();

  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContactThunk(id));
  };

  const openModal = (id) => {
    contactIdRef.current = id;

    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.field}>
          <IoPerson size={20} />
          <p>{name}</p>
        </div>
        <div className={s.field}>
          <BsFillTelephoneFill size={20} />
          <p>{number}</p>
        </div>
      </div>
      <div className={s.button_wrapper}>
        <button
          className={s.button}
          type="button"
          onClick={() => handleDeleteContact(id)}
        >
          Delete
        </button>
        <button className={s.button} onClick={() => openModal(id)}>
          Edit
        </button>
      </div>
      <EditContactModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        contactIdRef={contactIdRef.current}
      />
    </>
  );
}

export default Contact;
