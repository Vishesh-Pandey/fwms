import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { onSnapshot } from "firebase/firestore";
import Navbar from "../pages/super_market/Navbar";

function Info() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [info, setinfo] = useState({
    name: "loading...",
    role: "loading...",
    address: "loading...",
    pin: "loading...",
  });

  const getInfo = async () => {
    const docRef = doc(db, "supermarket", localStorage.getItem("who"));
    const docSnap = await getDoc(docRef);
    console.log("This is ");
    console.log(docSnap);
    const unsub = onSnapshot(
      doc(db, localStorage.getItem("who"), auth.currentUser.email),
      (doc) => {
        console.log("Current data: ", doc.data());
        setinfo(doc.data());
        console.log(info);
      }
    );
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {Object.keys(info).map((element, index) => {
              return (
                <div key={index}>
                  <h2>
                    {element}: {info[element]}
                  </h2>
                </div>
              );
            })}
            <p>Name : {user.email}</p>
            <button onClick={getInfo}>click</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
