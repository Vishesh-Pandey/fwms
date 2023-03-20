import React from "react";
import { Routes } from "react-router-dom";
import Info from "../../components/Info";
import Navbar from "./Navbar";

function SuperMarket() {
  return (
    <>
      <Navbar />
      <Info />
    </>
  );
}

export default SuperMarket;
