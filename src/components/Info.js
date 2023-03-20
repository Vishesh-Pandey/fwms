import React, { useEffect, useState } from "react";

import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function Info() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [info, setinfo] = useState({
    name: "loading...",
    role: "loading...",
    address: "loading...",
    pin: "loading...",
  });

  useEffect(() => {
    const getInfo = async () => {
      const docRef = doc(
        db,
        localStorage.getItem("who"),
        getAuth().currentUser.email
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setinfo(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Name : {info.name}</p>
            <p>Role : {info.role}</p>
            <p>Address : {info.address}</p>
            <p>Pin : {info.pin}</p>
            <p>Email : {user.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
