import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import s from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={s.contactList}>
      {filteredContacts.length ? (
        filteredContacts.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))
      ) : (
        <h2>No contacts!</h2>
      )}
    </ul>
  );
};
export default ContactList;
