import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContactsThunk } from "../../redux/contacts/operations";
import { toast, Toaster } from "react-hot-toast";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContactsThunk({ name: values.name, number: values.number }))
      .then(() => {
        toast.success("Successful! The contact was added!");
        resetForm();
      })
      .catch(() => {
        toast.error(" The contact wasn't added. Try again");
      });
  };
  const ContactFormSchema = Yup.object({
    name: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    number: Yup.string()
      .required("This field is required ")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });
  return (
    <>
      <Toaster position="top-center" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <Form className={s.form}>
          <h2 className={s.title}>Add new Contact</h2>
          <label className={s.label}>Name</label>
          <Field
            type="text"
            name="name"
            className={s.field}
            placeholder="Enter new contact name"
          />
          <ErrorMessage
            name="name"
            component="span"
            className={s.errorMessage}
          />
          <label className={s.label}>Phone</label>
          <Field
            type="text"
            name="number"
            className={s.field}
            placeholder="Enter new contact phone"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={s.errorMessage}
          />
          <button type="submit" className="mdc-button mdc-button--raised">
            <span className="mdc-button__label">Add contact</span>
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
