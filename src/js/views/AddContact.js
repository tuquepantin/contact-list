import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {

	const { store, actions } = useContext(Context);
  
  const handleChange = (event) => {
		setNewContact({...newContact,[event.target.name]: event.target.value,});
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
    <div class="mb-3">
        <label class="form-label">Full Name</label>
        <input
          class="form-control"
          type="text"
          name="full_name"
          placeholder="name"
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
        <button class="btn btn-primary" type="submit">Save</button>
      </form> 
		</>
	);
};
