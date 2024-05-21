import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import s from "./ContactList.module.css";

function ContactList() {
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact contact={contact} />
          </li>
        ))}
      </ul>
      {isLoading && <Loader />}
    </>
  );
}

export default ContactList;
