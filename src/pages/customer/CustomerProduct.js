import React, { useState } from "react";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import Navbar from "./Navbar";

function CustomerProduct() {
  const [products, setproducts] = useState([]);
  const [productInformation, setproductInformation] = useState([]);

  const getProducts = async () => {
    const q = query(collection(db, "supermarket/"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setproducts((products) => [...products, doc.data()]);
    });
  };

  const getProductCard = async () => {
    console.log("working");
    for (let i = 0; i < products.length; i++) {
      const q = query(
        collection(db, "supermarket/" + products.email + "/products")
      );

      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        setproductInformation((productInformation) => [
          ...productInformation,
          doc.data(),
        ]);
      });
      console.log("productInformation done");
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <button
          onClick={getProducts}
          className={`${
            products.length === 0 ? "btn btn-secondary" : "d-none"
          }`}
        >
          see Supermarket
        </button>

        <div className="row">
          {products.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div
                  className="card border-secondary mb-3 m-auto"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header bg-transparent border-success fw-bold">
                    {element.name}
                  </div>
                  <div className="card-body text-secondary">
                    <div className="card-text">Address : {element.address}</div>
                    <div className="card-text">Pin Code : {element.pin}</div>
                  </div>
                  <div className="card-footer bg-transparent border-success text-danger">
                    Rating : 5
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row">
          <div className="col">
            <button onClick={getProductCard} className="btn btn-primary">
              Get Product Cards
            </button>
          </div>
        </div>
        <div className="row">
          {productInformation.map((element, index) => {
            return (
              <div className="col">
                <p>{element}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CustomerProduct;
