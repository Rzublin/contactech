import React, { useReducer, useEffect } from "react";
import ContactContext from "./contactContext";
import ContactbReducer from "./contactReducer";
import * as contactTypes from "../types";

const ContactState = (props) => {
  const initialState = {
    contact: [],
    contacts: {},
  };

  const [state, dispatch] = useReducer(ContactbReducer, initialState);

  const addContact = () => {
    dispatch({
      type: contactTypes.ADD_CONTACT,
      payload: [],
    });
  };

  const getContacts = () => {
    dispatch({
      type: contactTypes.GET_CONTACTS,
      payload: [],
    });
  };

  const deleteContact = () => {
    dispatch({
      type: contactTypes.DELETE_CONTACT,
      payload: [],
    });
  };

  const updateContact = () => {
    dispatch({
      type: contactTypes.UPDATE_CONTACT,
      payload: [],
    });
  };

  useEffect(() => {
    const fetchData = () => {
      dispatch({
        type: contactTypes.GET_CONTACTS,
        payload: [],
      });
    };
    fetchData();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        contact: state.contact,
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
