import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { logIn } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./LoginForm.module.css";
import * as Yup from "yup";

const LoginForm = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const initialValues = {
    email: "",
    password: "",
  };

  const LoginFormSchema = Yup.object({
    email: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
    password: Yup.string()
      .required("This field is required!")
      .min(3, "Too short!")
      .max(50, "Too long!"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginFormSchema}
      >
        <Form className={s.form}>
          <h2 className={s.formTitle}>Login</h2>
          <label className={s.label}>Email</label>
          <Field
            name="email"
            className={s.field}
            placeholder="Enter your email"
          />
          <ErrorMessage
            name="email"
            component="span"
            className={s.errorMessage}
          />
          <label className={s.label}>Password</label>
          <Field
            name="password"
            type="password"
            className={s.field}
            placeholder="Enter your password"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={s.errorMessage}
          />
          <button type="submit" className={s.loginBtn}>
            Login
          </button>
          <p className={s.text}>
            You don`t have account?
            <Link to="/register" className={s.link}>
              Sign up!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
