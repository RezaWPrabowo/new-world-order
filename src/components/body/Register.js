import React from "react";

import "./register.scss";

const Register = () => {
  return (
    <div className="register-container is-flex-column">
      <div className="register-left-content">
        <p>Register now!</p>

        <p>
          Register your details and create an account. When applications open in
          December, we'll let you know.
        </p>
      </div>

      <div className="register-right-content">
        <div className="is-flex-column">
          <p className="flex-half">First name:</p>

          <div className="flex-one">
            <input />
          </div>
        </div>

        <div className="is-flex-column">
          <p className="flex-half">Surname:</p>

          <div className="flex-one">
            <input />
          </div>
        </div>

        <div className="is-flex-column">
          <p className="flex-half">Date of Birth:</p>

          <div className="flex-one">
            <input />
          </div>
        </div>

        <div className="is-flex-column">
          <p className="flex-half">Email address:</p>

          <div className="flex-one">
            <input />
          </div>
        </div>

        <div className="is-flex-column">
          <p className="flex-half">Mobile number:</p>

          <div className="flex-one">
            <input />
          </div>
        </div>

        <div className="is-flex-column">
          <p className="flex-half" />

          <div className="flex-one is-flex">
            <div className="register-right-footer flex-one">
              <p>Privacy policy</p>
              <p>Terms and conditions</p>
            </div>

            <button className="register-button">Register now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
