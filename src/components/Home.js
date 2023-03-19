import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div class="card text-bg-dark">
      <img
        style={{ filter: "blur(5px)" }}
        src="https://th.bing.com/th/id/OIP.6sRwMldMd6wxCZaemBlJywHaEK?pid=ImgDet&rs=1"
        class="card-img"
        alt="Food Wastage ain't good"
      />
      <div class="card-img-overlay">
        <h5 class="card-title">ZERO FOOD WASTAGE</h5>
        <p class="card-text">WASTED FOOD TAKES A BITE OUT OF YOUR BUDGET</p>
        <p class="card-text">
          <small>
            Feeding the hungry and the one in need adds yourself one good deed.
          </small>

          <button
            onClick={() => {
              navigate("/getStarted");
            }}
            type="button"
            class="btn btn-primary btn-lg"
          >
            GET STARTED <i class="bi bi-box-arrow-right"></i>
          </button>
        </p>
      </div>
    </div>
  );
};

export default Home;
