import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContactsThunk } from "../../redux/contacts/operations";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <ContactList />
    </>
  );
};

export default ContactsPage;
