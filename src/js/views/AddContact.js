import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = useContext(Context);

  const handleChange = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };

  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    agenda_slug: "victorpantin",
    address: "",
    phone: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.createContact(newContact);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Add a New Contact</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input
            class="form-control"
            type="text"
            name="full_name"
            placeholder="Name"
            value={newContact.full_name}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={newContact.email}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Phone</label>
          <input
            class="form-control"
            type="text"
            name="phone"
            placeholder="Phone"
            value={newContact.phone}
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Address</label>
          <input
            class="form-control"
            type="text"
            name="address"
            placeholder="Address"
            value={newContact.address}
            onChange={handleChange}
          />
        </div>
        <button class="btn btn-primary col-12" type="submit">
          Save
        </button>
      </form>
      <Link to="/"> or get back to contacts</Link>
    </div>
  );
};
