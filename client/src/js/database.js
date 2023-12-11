// client/src/js/database.js:
// TODO: Install the following package:
import { openDB } from 'idb';

// 🚧: Complete the initDb() function below:
const initdb = async () => {
  openDB('contact_db', 2, {  
    upgrade(db) {
      if (!db.objectStoreNames.contains('contacts')) {
        db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
      }
    },
  });
  };

// 🚧: Complete the postDb() function below:
export const postDb = async (name, home, cell, email) => {
  const db = await openDB('contact_db', 1);
  const tx = db.transaction('contacts', 'readwrite');
  const store = tx.objectStore('contacts');
  const result = await store.add({ name, home, cell, email });
  return result;
};

// 🚧: Complete the getDb() function below:
export const getDb = async () => {
  const db = await openDB('contact_db', 1);
  const tx = db.transaction('contacts', 'readonly');
  const store = tx.objectStore('contacts');
  const result = await store.getAll();
  return result;
};

  

// 🚧: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
  const db = await openDB('contact_db', 1);
  const tx = db.transaction('contacts', 'readwrite');
  const store = tx.objectStore('contacts');
  await store.delete(id);
  return tx.done;
};


initdb();
