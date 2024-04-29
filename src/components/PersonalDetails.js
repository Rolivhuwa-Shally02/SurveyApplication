import React, { useState, useEffect } from "react";

const UserForm = ({ onData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    dob: "",
    contactNumber: "",
  });

  useEffect(() => {
    onData("personaldetails", formData);
  }, [
    formData.firstName,
    formData.email,
    formData.dob,
    formData.contactNumber,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission here, e.g., send data to server
  };

  return (
    <div>
      <h1>User Details</h1>
      <form onSubmit={handleSubmit} className="mb-3">
        <label className="form-label">
          First Name:
          <input
            type="text"
            name="firstName"
            class="form-control"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            class="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Date of Birth:
          <input
            type="date"
            name="dob"
            class="form-control"
            value={formData.dob}
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="form-label">
          Contact Number:
          <input
            type="tel"
            name="contactNumber"
            class="form-control"
            value={formData.contactNumber}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default UserForm;
