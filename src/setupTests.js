// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
/*import '@testing-library/jest-dom';
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
  
testFirebaseRead();*/
import React, {useRef} from 'react';
import { firestore } from '../firebase';
import { addDoc, collection } from "@firebase/firestore"

export default function Home() {
  const messageRef = useRef();
  const ref = collection(firestore, "message");
  
  const handleSave = async(e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    let data = {
      message: messageRef.current.value,
    }
    try{
      addDoc(ref, )
    }catch( e){
      console.log(e);
    }
  };
  return(
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Message</label>
        <input type ="text" ref={messageRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}
