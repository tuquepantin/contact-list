import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Card = () => {
    const { store, actions } = useContext(Context);

    const deleteContact = (id) => {
    actions.deleteContact(id);
    };
    return (
    <>
      <div>
        
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
                <div className="col-8 p-4">
                  <h3>{contact.full_name}</h3>
                  <p>{contact.email}</p>
                  <p>{contact.phone}</p>
                  <p>{contact.address}</p>
                </div>
                <div className="col-2  mt-4">
                  <Link to={`/update/${contact.id}`} >
                      <i class="fa-solid fa-pencil fa-lg"></i>
                    </Link>
				          <i onClick={() => deleteContact(contact.id)} class="fa-solid fa-trash fa-lg puntero ms-4"></i>
				        </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
