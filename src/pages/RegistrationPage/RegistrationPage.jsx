import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import s from "./RegistrationPage.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(7, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={s.form}>
          <label className={s.label} htmlFor={emailFieldId}>
            Email
          </label>
          <div className={s.wrapper}>
            <Field
              className={s.input}
              id={emailFieldId}
              name="email"
              type="email"
            ></Field>
            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <label className={s.label} htmlFor={passwordFieldId}>
            Password
          </label>
          <div className={s.wrapper}>
            <Field
              className={s.input}
              id={passwordFieldId}
              name="password"
              type="password"
            ></Field>
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default RegistrationPage;
