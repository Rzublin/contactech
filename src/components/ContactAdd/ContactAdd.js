import React, { useState, useContext } from "react";
import StyledContactAdd from "./StyledContactAdd";
import ContactContext from "../../context/contacts/contactContext";

const ContactAdd = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const { addContact } = useContext(ContactContext);

  return (
    <StyledContactAdd>
      <h3>Add new Contact</h3>
      <form>
        <div className="form-control">
          <label>Firstname: </label>
          <input
            type="text"
            value={firstname}
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter firstname..."
          />
        </div>
        <div className="form-control">
          <label>Lastname:</label>
          <input
            type="text"
            value={lastname}
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter lastname..."
          />
        </div>
        <div className="form-control">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email..."
          />
        </div>
        <button
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            if (firstname && lastname && email) {
              addContact(firstname, lastname, email);
              setFirstname("");
              setLastname("");
              setEmail("");
            }
          }}
        >
          Add Contact
        </button>
      </form>
    </StyledContactAdd>
  );
};

export default ContactAdd;
