import React, { useState } from "react";

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import Navbar from "./Navbar";

function CustomerProduct() {
  let supermarketArray = [];
  const [products, setproducts] = useState([]);
  const [productInformation, setproductInformation] = useState([]);
  const [productsVisible, setproductsVisible] = useState(false);

  const getProductCard = async () => {
    setproductsVisible(true);
    supermarketArray = [];
    const q = query(collection(db, "supermarket/"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      supermarketArray.push(doc.data());
      //   setproducts((products) => [...products, doc.data()]);
    });
    console.log("working");
    console.log(products);
    for (let i = 0; i < supermarketArray.length; i++) {
      const q = query(
        collection(
          db,
          "supermarket/" + supermarketArray[i].email + "/products/"
        )
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 m-auto py-5">
            <button
              onClick={getProductCard}
              className={`${
                productsVisible === false ? "btn btn-secondary w-100" : "d-none"
              }`}
            >
              Show Products
            </button>
          </div>
        </div>
        <div className="row">
          {productInformation.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                <div
                  className="card text-bg-light mb-3 m-auto"
                  style={{ maxWidth: "18rem" }}
                >
                  <div className="card-header">{element.name}</div>
                  <div className="card-body">
                    <div className="card-text ">
                      Price :
                      <span className="text-decoration-line-through">
                        {element.price}
                      </span>
                    </div>
                    <div className="card-text ">
                      Discounted Price :
                      <span className="text-success">
                        {element.discounted_price}
                      </span>
                    </div>
                    <div className="card-text ">
                      Quantity remaining :
                      <span className="text-danger">{element.quantity}</span>
                    </div>
                    <button className="btn btn-outline-secondary w-100 my-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CustomerProduct;
