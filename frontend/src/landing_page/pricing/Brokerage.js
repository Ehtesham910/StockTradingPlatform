import React from 'react';

function Brokerage() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row border-top pt-5 text-center">
                <div className="col-6">
                    <a href="" className="text-decoration-none">
                        Brokerage calculator
                    </a>
                </div>
                <div className="col-6">
                    <a href="" className="text-decoration-none">
                        List of charges
                    </a>
                </div>
            </div>
            <ul className="text-muted mt-4">
                <li className="mb-3">Call &amp; Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                <li className="mb-3">Digital contract notes will be sent via e-mail.</li>
                <li className="mb-3">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                <li className="mb-3">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li className="mb-3">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            </ul>
        </div>
    );
}

export default Brokerage;