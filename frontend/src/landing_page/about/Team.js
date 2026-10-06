import React from "react";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row  mb-5">
        <h1 className="mt-5 fs-3 mb-4 text-center text-muted">People</h1>
      </div>
      <div
        className="row p-5 mt-5 mb-5 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1rem" }}
      >
        <div className="col text-center">
          <img
            src="media/nithinKamath.jpg"
            alt="Team Image"
            className="mb-5"
            style={{ borderRadius: "50%", width: "300px", height: "300px" }}
          />
          <h4>Nithin Kamath</h4>
          <p>Founder & CEO</p>
        </div>
        <div className="col p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
