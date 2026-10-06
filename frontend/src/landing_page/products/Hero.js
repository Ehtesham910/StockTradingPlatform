import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="products-container products-hero text-center">
      <h1 className="fs-3 mb-4 text-center text-muted">Zerodha Products</h1>
      <p className="products-hero-subtitle">
        Sleek, modern, and intuitive trading platforms
      </p>
      <p className="products-hero-link">
        Check out our{" "}
        <Link to="/pricing" className="product-link">
          investment offerings <span aria-hidden="true">→</span>
        </Link>
      </p>
    </section>
  );
}

export default Hero;
