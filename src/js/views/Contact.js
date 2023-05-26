import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";

export const Contact = () => {
  
  const { store, actions} = useContext(Context)

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

      
    </div>
  );
};


