import React, { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../config/firebase";
import { PopupContext } from "./SignupContext";
import {collection, doc, getDoc, setDoc } from "firebase/firestore";

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { setSignupPopup } = useContext(PopupContext);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
  
      if (result.user) {
        console.log("Authenticated user:", result.user);
        setSignupPopup(false);
        setUser(result.user);
        const userDocRef = doc(userCollectionRef, result.user.uid);
        const isExisting = await getDoc(userDocRef);
  
        if (!isExisting.exists()) {
          await setDoc(userDocRef, {
            user: result.user.uid,
            name: result.user.displayName,
            email: result.user.email,
          });
        } else {
          console.log("User already exists");
        }
      }
    } catch (error) {
      console.error("Error adding document:", error);
    }
  };
  

  const signOutUser = () => {
    auth
      .signOut()
      .then(() => setUser(null))
      .catch((error) => console.error("Sign out error", error));
  };

  return (
    <UserContext.Provider value={{ user, signInWithGoogle, signOutUser }}>
      {children}
    </UserContext.Provider>
  );
};
