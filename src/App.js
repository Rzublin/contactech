import React from "react";
import Header from "./components/Header/Header";
import ContactList from "./components/ContactList/ContactList";
import Footer from "./components/Footer/Footer";
import ContactState from "./context/contacts/ContactState";
import ContactAdd from "./components/ContactAdd/ContactAdd";

function App() {
  return (
    <ContactState>
      <Header />
      <div className="main container">
        <ContactList />
        <ContactAdd />
      </div>
      <Footer />
    </ContactState>
  );
}

export default App;
