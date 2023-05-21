import React, { useState } from "react";

const ContactList = () => {
  const [contacts, setContacts] = useState([
    {
      full_name: "John Doe",
      email: "johndoe@example.com",
      phone: "123-456-7890",
      address: "turmero"
    }
  ]);

  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    
  });

  const handleChange = (event) => {
    setNewContact({
      ...newContact,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setContacts([...contacts, newContact]);
    setNewContact({
      full_name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.full_name}</strong>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.address}</p>
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
