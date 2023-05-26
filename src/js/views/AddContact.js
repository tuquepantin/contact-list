import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const { store, actions } = useContext(Context);

	const handleChange = (event) => {
		setNewContact({
		  ...newContact,
		  [event.target.name]: event.target.value,
		});
	  };

	const [newContact, setNewContact] = useState({
		full_name: "",
			email: "",
			agenda_slug: "victorpantin",
			address:"",
			phone:""
	  });


	const handleSubmit = (event) => {
		event.preventDefault();
		actions.createContact(newContact)
	  };

	return (
		<>
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
		</>
	);
};
