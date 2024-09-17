// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function testFirebaseWrite() {
    try {
      // Write test data to Firestore
      const docRef = await addDoc(collection(db, "testCollection"), {
        testField: "Hello Firebase",
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  
testFirebaseWrite();

export async function testFirebaseRead() {
  try {
    // Fetch documents from 'testCollection'
    const querySnapshot = await getDocs(collection(db, "testCollection"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  } catch (e) {
    console.error("Error reading documents: ", e);
  }
}
  
testFirebaseRead();
