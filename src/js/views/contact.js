import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

const ContactList = () => {
  
  const [newContact, setNewContact] = useState({
    full_name: "",
        email: "",
        agenda_slug: "victorpantin",
        address:"",
        phone:""
  });

///// Context/////
  const { store, actions} = useContext(Context)

  const handleChange = (event) => {
    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.createContact(newContact)
  };

  const deleteContact = (id) => {
    actions.deleteContact(id)
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {store.contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.full_name}</strong>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="full_name"
          placeholder="name"
          value={newContact.full_name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newContact.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newContact.address}
          onChange={handleChange}
        />
        
        
        
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactList;
