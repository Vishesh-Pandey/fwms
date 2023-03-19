import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="card text-bg-dark">
      <img
        style={{ filter: "blur(5px)" }}
        src="https://th.bing.com/th/id/OIP.6sRwMldMd6wxCZaemBlJywHaEK?pid=ImgDet&rs=1"
        className="card-img"
        alt="Food Wastage ain't good"
      />
      <div className="card-img-overlay">
        <h5 className="card-title">ZERO FOOD WASTAGE</h5>
        <p className="card-text">WASTED FOOD TAKES A BITE OUT OF YOUR BUDGET</p>
        <p className="card-text">
          <small>
            Feeding the hungry and the one in need adds yourself one good deed.
          </small>

          <button
            onClick={() => {
              navigate("/getStarted");
            }}
            type="button"
            className="btn btn-primary btn-lg"
          >
            GET STARTED <i className="bi bi-box-arrow-right"></i>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Home;
