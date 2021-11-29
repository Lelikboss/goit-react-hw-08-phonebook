import React from 'react';
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { contactsSelectors } from '../../redux/phonebook';
// import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  return (
    <div>
      {getFilteredContacts().map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </div>
  );
}
