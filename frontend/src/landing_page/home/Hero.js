import React from "react";

function Hero() {
  return (
    <div className="site-container py-3 mt-5 mb-5">
      <div className="row text-center">
        <img src="media/homeHero.png" alt="Hero Image" className="mb-5" />
        <h1 className="mt-5 fs-3 mb-4">Invest in everything</h1>
        <p className="fs-5 mb-4 text-muted">
          Online platform to invest in stocks, IPOs, derivatives, mutual funds,
          ETFs, bonds, and more.
        </p>
        <button
          className="mb-2 p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
