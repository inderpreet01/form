import React, { Component } from "react";

const RegisterForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const password = formData.get("password");
    const passwordConfirmation = formData.get("password-con");

    if (password !== passwordConfirmation) {
      alert("Passwords do not match!!!Please try again.");
    } else {
      alert("Form submitted successfully!");
    }
  };
  return (
    <div id="register-form-main">
      <div className="register-image">
        <div className="register-image-wrapper">
          <img src="/image/register.png"></img>
        </div>
      </div>
      <div id="register-main">
        <div id="register-form">
          <h1>Register Form</h1>
          <h6>
            Already have an account?<span>Login</span>
          </h6>
          <form onSubmit={handleSubmit}>
            <label for="first-name"> </label>
            <input
              type="text"
              name="first-name"
              placeholder=" First Name*"
              className="name"
              required
            />
            &nbsp;&nbsp;
            <label for="middle-name"></label>
            <input
              type="text"
              name="middle-name"
              placeholder="Middle Name"
              className="name"
            />
            &nbsp;&nbsp;
            <label for="last-name"> </label>
            <input
              type="text"
              name="last-name"
              placeholder=" Last Name*"
              className="name"
              required
            />
            <br />
            <br />
            <label for="address"></label>
            <input
              type="text"
              name="address"
              className="address"
              placeholder="Enter Your Address(House No,Building,Area)*"
            />
            &nbsp;&nbsp;
            <label for="locality"></label>
            <input
              type="text"
              name="locality"
              className="address"
              placeholder="Enter Your Locality*"
            />
            <br />
            <br />
            <label for="dis-city"></label>
            <input
              name="dis-city"
              type="text"
              class="name"
              placeholder="City/District*"
              required
            />
            &nbsp;&nbsp;
            <label for="state"></label>
            <input
              name="state"
              type="text"
              class="name"
              placeholder="State*"
              required
            />
            &nbsp;&nbsp;
            <label for="pin-code"></label>
            <input
              name="pincode"
              type="text"
              class="name"
              inputmode="numeric"
              maxlength="6"
              placeholder="Pincode*"
              required
            />
            <br />
            <br />
            <label for="email"> </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email*"
              required
            />
            <br />
            <br />
            <label for="password"> </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password*"
              required
            />
            <br />
            <br />
            <label for="password-con"> </label>
            <input
              type="password"
              name="password-con"
              placeholder="Password-confirmation*"
              required
            />
            <br />
            <br />
            <label for="phone"> </label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone-No*"
              required
            />
            <br />
            <br />
            <label for="dob"></label>
            <input
              type="date"
              name="date"
              placeholder="Enter your DOB"
              required
            />
            <br />
            <br />
            <label for="gender"></label>
            <select name="gender" required>
              <option value="">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              <option value="Prefer not to answer">Perfer not to Answer</option>
            </select>
            <br />
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
