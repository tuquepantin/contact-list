import React, { useState, useEffect } from "react";


const URLBASE = 'https://assets.breatheco.de/apis/fake/contact/agenda/victorpantin'

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

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



  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };



  const getContact = async () => {
		try{
			let response = await fetch(`${URLBASE}`)
			let data = await response.json()

			if(response.status == 404){
				console.log("error")
				
			}else{
				setContacts(data)
			}



		}catch(err){
			console.log(err)
		}

	}



  useEffect(() => {
		getContact()
	}, [])





  

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
