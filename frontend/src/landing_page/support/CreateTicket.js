import React from "react";

const ticketCategories = [
  {
    title: "Account Opening",
    icon: "✦",
    items: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account Opening",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "◉",
    items: [
      "Login Credentials",
      "Account Modification and Segment Addition",
      "DP ID and bank details",
      "Your Profile",
      "Transfer and conversion of shares",
    ],
  },
  {
    title: "Your Zerodha Account",
    icon: "▣",
    items: [
      "Margin/leverage, Product and Order types",
      "Kite Web and Mobile",
      "Trading FAQs",
      "Corporate Actions",
      "Sentinel",
      "Kite API",
      "Pi and other platform",
      "Stockbrokers+",
      "GTT",
    ],
  },
];

function CreateTicket() {
  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: "1280px" }}>
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-muted fs-3 fw-normal">
            To create a ticket, select a relevant topic
          </h1>
        </div>
      </div>

      <div className="row mt-4">
        {ticketCategories.map((category, index) => (
          <div className="col-md-4 mb-4" key={`${category.title}-${index}`}>
            <h3 className="fs-5 fw-normal mb-3 text-dark">
              <span className="me-2">{category.icon}</span>
              {category.title}
            </h3>
            <ul className="list-unstyled">
              {category.items.map((item) => (
                <li className="mb-3" key={item}>
                  <a href="#" className="text-primary text-decoration-none">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
