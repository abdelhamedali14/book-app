import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormControl } from "../../components/form-control/FormControl";
import booksShlf from "../../assets/images/books2.jpg";
import appLogo from "../../assets/images/logo.png";
import { Card } from "../../components/UI/card/Card";
import Button from "../../components/UI/button/Button";
import "./login.scss";

export function LogIn() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("invalid email format").required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "password should be more than 6 characters"),
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="login-container">
      <Card className="login-wrapper">
        <div className="inputs-wrapper">
          <h3>
            Please enter your email address and password to access your account
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="field">
                <FormControl
                  control="input"
                  placeholder="Email"
                  type="text"
                  name="email"
                  className="input"
                />
              </div>
              <div className="field">
                <FormControl
                  control="input"
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input"
                />
              </div>
              <a href="#">forget password ?</a>
              <Button type="submit">Sign In</Button>
              <div className="app-logo">
                <img src={appLogo} alt="logo" />
              </div>
            </Form>
          </Formik>
        </div>
        <div className="image-wrapper">
          <img src={booksShlf} alt="book shlf" />
          <div className="image-layer"></div>
        </div>
      </Card>
    </div>
  );
}
