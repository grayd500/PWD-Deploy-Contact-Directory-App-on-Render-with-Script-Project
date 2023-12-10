// client/src/js/database.js:
// TODO: Install the following package:
import { openDB } from 'idb';

// 🚧: Complete the initDb() function below:
const initdb = async () => {
    openDB('contact_db', 1, {
      upgrade(db) {
        if (!db.objectStoreNames.contains('contacts')) {
          db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
        }
      },
    });
  };


// 🚧: Complete the postDb() function below:
export const postDb = async (name, home, cell, email) => {
    // Code to add data to IndexedDB
  };
  

// 🚧: Complete the getDb() function below:
export const getDb = async () => {
    // Code to retrieve data from IndexedDB
  };
  

// 🚧: Complete the deleteDb() function below:
export const deleteDb = async (id) => {
    // Code to delete data from IndexedDB
  };
  

initdb();
