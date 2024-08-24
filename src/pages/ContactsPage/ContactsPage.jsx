import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactsThunk } from "../../redux/contacts/operations";
import { selectIsLoading, selectIsError } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import s from "./ContactsPage.module.css";

const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <div className={s.contactsContainer}>
        <div>
          <ContactForm />
        </div>
        <div className={s.searchContainer}>
          <SearchBox />
          <ContactList />
          {isLoading && <h1 className={s.loading}>Loading...</h1>}
          {isError && <h1>Something went wrong!</h1>}
        </div>
      </div>
    </>
  );
};

export default ContactsPage;
