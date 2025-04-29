import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectLoading,
  selectError,
} from '../../redux/contactsSlice';
import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactsForm />

      <h2>Contacts</h2>
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>Something went wrong: {error}</p>}
      {!loading && !error && <ContactList />}
    </div>
  );
};

export default App;
