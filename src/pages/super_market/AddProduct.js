import React, { useRef } from "react";
import Navbar from "./Navbar";

import { getFirestore, setDoc, doc } from "firebase/firestore";

import { app } from "../../firebase";

function AddProduct() {
  const db = getFirestore(app);
  const nameRef = useRef();
  const priceRef = useRef();
  const discountRef = useRef();
  const qtyRef = useRef();
  const expiryRef = useRef();

  const addData = async () => {
    // Add a new document in collection "cities"
    await setDoc(doc(db, localStorage.getItem("who")), {
      name: nameRef.current.value,
      price: priceRef.current.value,
      discounted_price: discountRef.current.value,
      quantity: qtyRef.current.value,
      exp_date: expiryRef.current.value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Add Product here</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              ref={nameRef}
              type="text"
              className="form-control"
              placeholder="Enter Product Name"
            />
            <input
              ref={priceRef}
              type="text"
              className="form-control"
              placeholder="Enter Product Price"
            />
            <input
              ref={discountRef}
              type="text"
              className="form-control"
              placeholder="Enter Product Discounted Price"
            />
            <input
              type="text"
              ref={qtyRef}
              className="form-control"
              placeholder="Enter Product Qty"
            />
            <input
              ref={expiryRef}
              type="text"
              className="form-control"
              placeholder="Enter Product Expiry Date"
            />

            <button className="btn btn-secondary w-100">Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
