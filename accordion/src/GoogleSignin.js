import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "./Firebase";

export default function GoogleSignin() {
  const method1 = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const result = await signInWithPopup(auth, provider);
  
console.log(result);

}

  return (
    <button type="button" onClick={method1} className="bg-red-700 rounded-lg text-white p-3 hover:opacity-95">
      sign in with google
    </button>
  );
}
