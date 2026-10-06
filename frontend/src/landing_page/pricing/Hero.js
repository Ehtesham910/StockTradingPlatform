import React from "react";

function Hero() {
  return (
    <>
      <div className="products-container products-hero pricing-hero text-center">
        <h1 className=" fs-3 mb-4 text-center text-muted">Charges</h1>
        <p className="products-hero-subtitle">List of all charges and taxes</p>
      </div>
      <div className="row px-5 pt-2 pb-5 text-center">
        <div className="col-4 p-3">
          <img src="media/pricingEquity.svg" className="img-fluid w-50" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/intradayTrades.svg" className="img-fluid w-50" />
          <h1 className="fs-4">Intraday and F&amp;O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on
            intraday trades across<br/> equity, currency, and commodity trades.<br/> Flat
            ₹ 20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/pricingMF.svg" className="img-fluid w-50" />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely<br/> free — ₹ 0
            commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
