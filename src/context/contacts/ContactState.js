import React, { useReducer, useEffect } from "react";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import * as contactTypes from "../types";

const ContactState = (props) => {
  const initialState = [
    {
      id: 1,
      firstname: "Hans",
      lastname: "Musterman",
      email: "hans@muster.de",
      avatar: `https://api.adorable.io/avatars/50/hansmusterman@adorable`,
    },
    {
      id: 2,
      firstname: "Hanna",
      lastname: "Musterman",
      email: "hanna@muster.de",
      avatar: `https://api.adorable.io/avatars/50/hannamusterman@adorable`,
    },
    {
      id: 3,
      firstname: "Hagrid",
      lastname: "Musterman",
      email: "hagrid@muster.de",
      avatar: `https://api.adorable.io/avatars/50/hagridmusterman@adorable`,
    },
  ];
  const [state, dispatch] = useReducer(ContactReducer, [], () => {
    const localData = localStorage.getItem("contactListStorage");
    return localData ? JSON.parse(localData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("contactListStorage", JSON.stringify(state));
  }, [state]);

  const addContact = (firstname, lastname, email) => {
    dispatch({
      type: contactTypes.ADD_CONTACT,
      payload: { firstname, lastname, email },
    });
  };

  const getContacts = () => {
    dispatch({
      type: contactTypes.GET_CONTACTS,
      payload: [],
    });
  };

  const deleteContact = (id) => {
    dispatch({
      type: contactTypes.DELETE_CONTACT,
      payload: { id },
    });
  };

  const updateContact = (firstname, lastname, email, id) => {
    dispatch({
      type: contactTypes.UPDATE_CONTACT,
      payload: { firstname, lastname, email, id },
    });
  };

  return (
    <ContactContext.Provider
      value={{
        state,
        deleteContact,
        getContacts,
        updateContact,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
