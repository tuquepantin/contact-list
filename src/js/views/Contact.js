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
          <div class="card" key={contact.id}>
            <div className="row">
            <div className="col-2 p-3">
                    <img
                      src="https://hermanogato.org/wp-content/uploads/2020/10/gato-munchkin-2-400x400.jpg"
                      className="img-fluid rounded-circle"
                      alt="Contact"
                    />
            </div>
            <div className="col-8">
              <strong>{contact.full_name}</strong>
              <p>{contact.email}</p>
              <p>{contact.phone}</p>
              <p>{contact.address}</p>
            </div>
            <div className="col-2">
              <button onClick={() => deleteContact(contact.id)}>Delete</button></div>
            
            </div>
            
          </div>
        ))}
      </ul>

      
    </div>
  );
};


