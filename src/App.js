import React, { useState } from "react";
import Header from "./components/Header/Header";
import ContactList from "./components/ContactList/ContactList";
import Footer from "./components/Footer/Footer";
import ContactState from "./context/contacts/ContactState";
import ContactForm from "./components/ContactForm/ContactForm";
import Modal from "./components/Modal/Modal";

function App() {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [contact, setContact] = useState("");

  const toggleModal = () => {
    setIsUpdateMode(!isUpdateMode);
  };
  const editContact = (firstname, lastname, email, id, avatar) => {
    setIsUpdateMode(!isUpdateMode);
    setContact({ firstname, lastname, email, id, avatar });
  };
  return (
    <ContactState>
      <Header />
      {isUpdateMode && (
        <Modal toggleModal={toggleModal}>
          <ContactForm
            actionType="UPDATE"
            contact={contact}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
      <div className="main container">
        <ContactList editContact={editContact} />
        <ContactForm actionType="ADD" />
      </div>
      <Footer />
    </ContactState>
  );
}

export default App;
