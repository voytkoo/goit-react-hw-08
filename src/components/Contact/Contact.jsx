import { useDispatch } from "react-redux";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { deleteContactsThunk } from "../../redux/contacts/operations";
import { toast, Toaster } from "react-hot-toast";
import s from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      await dispatch(deleteContactsThunk(id));
      toast.success(`Contact ${name} successfully deleted!`);
    } catch (error) {
      console.log(error.message);
      toast.error("The contact deletion error. Please try again!");
    }
  };
  return (
    <div className={s.container}>
      <div className={s.contact}>
        <p className={s.name}>
          <span className={s.icon}>
            <FaUserAlt size={16} />
          </span>
          {name}
        </p>
        <p className={s.phone}>
          <span className={s.icon}>
            <FaPhoneAlt size={16} />
          </span>
          {number}
        </p>
      </div>
      <button className={s.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Contact;
