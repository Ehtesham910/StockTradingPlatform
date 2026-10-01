import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container-fluid site-container mt-5">
        <div className="row py-5">
          <div className="col-lg-4 col-sm-12">
            <img src="media/logo.svg" className="brand-logo" alt="Logo" />
            <p className="mt-3 small">
              © 2010 - 2026, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>
          </div>
          <div className="col">
            <h1 className="fs-5 mb-3">Company</h1>
            <Link to="/about" style={{ textDecoration: "none", color: "grey" }}>
              About
            </Link>
            <br />
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "grey" }}
            >
              Products
            </Link>
            <br />
            <Link
              to="/pricing"
              style={{ textDecoration: "none", color: "grey" }}
            >
              Pricing
            </Link>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              Referral programme
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              Careers
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              Zerodha tech
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              Press &amp; media
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              Zerodha cares (CSR)
            </a>
            <br />
          </div>
          <div className="col">
            <h1 className="fs-5 mb-3">Support</h1>
            <Link
              to="/support"
              style={{ textDecoration: "none", color: "grey" }}
            >
              Contact us
            </Link>
            <br />
            <Link
              to="/support"
              style={{ textDecoration: "none", color: "grey" }}
            >
              Support portal
            </Link>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              Z-Connect blog
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              List of charges
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              Downloads &amp; resources
            </a>
            <br />
          </div>
          <div className="col">
            <h1 className="fs-5 mb-3">Account</h1>
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "grey" }}
            >
              Open an account
            </Link>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              Fund transfer
            </a>
            <br />
            <a href="" style={{ textDecoration: "none", color: "grey" }}>
              60 day challenge
            </a>
            <br />
          </div>
        </div>
        <div className="py-5 text-small text-muted ">
          <p>
            Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Limited – SEBI Registration no.:
            IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address:
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF Procedure to file a complaint on SEBI SCORES/SMARTODR:
            Register on SCORES portal & SMARTODR. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of grievances
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on
            SCORES portal & SMARTODR. Mandatory details for filing complaints on
            SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of grievances
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
