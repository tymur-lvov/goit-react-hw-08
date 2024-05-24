import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContactsThunk } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;
