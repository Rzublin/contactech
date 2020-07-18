import React from "react";
import Header from './components/Header/Header'
import ContactList from './components/ContactList/ContactList'
import Footer from './components/Footer/Footer'
import ContactState from './context/contacts/ContactState'

function App() {
  return (
    <ContactState>
      <div className="App">
        <Header />
        <ContactList />
        <Footer />
      </div>
    </ContactState>
  );
}

export default App;
