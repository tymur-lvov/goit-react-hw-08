import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Modal from "react-modal";
import s from "./EditContactModal.module.css";
import { updateContactThunk } from "../../redux/contacts/operations";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: 0,
    padding: 0,
    width: 400,
    height: 272,
  },
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const EditContactModal = ({ isOpen, closeModal, contactIdRef }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const payload = {
      contactIdRef,
      body: values,
    };

    dispatch(updateContactThunk(payload));

    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={nameFieldId}>
            New Name
          </label>
          <div className={s.wrapper}>
            <Field className={s.input} id={nameFieldId} name="name"></Field>
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <label className={s.label} htmlFor={numberFieldId}>
            New Number
          </label>
          <div className={s.wrapper}>
            <Field className={s.input} id={numberFieldId} name="number"></Field>
            <ErrorMessage className={s.error} name="number" component="span" />
          </div>
          <div className={s.button_wrapper}>
            <button className={s.button} type="submit">
              Edit Contact
            </button>
            <button className={s.button} onClick={closeModal} type="button">
              Close Modal
            </button>
          </div>
        </Form>
      </Formik>
    </Modal>
  );
};

export default EditContactModal;
