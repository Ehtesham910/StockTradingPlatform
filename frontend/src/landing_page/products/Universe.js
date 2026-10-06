import React from "react";
import { Link } from "react-router-dom";

function Universe() {
    return (
        <section className="products-container universe-section">
            <header className="universe-header">
                <h2 className="products-hero-title">The Zerodha Universe</h2>
                <p className="products-hero-subtitle">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
            </header>

            <div className="universe-grid">
                <div className="universe-partner">
                    <div className="universe-logo-wrap">
                        <img src="media/zerodhaFundhouse.png" alt="Zerodha Fund House" className="universe-logo partner-logo-fundhouse" />
                    </div>
                    <p className="universe-description">Our asset management venture creating simple, transparent index funds to help you save for your goals.</p>
                </div>
                <div className="universe-partner">
                    <div className="universe-logo-wrap">
                        <img src="media/sensibullLogo.svg" alt="Sensibull" className="universe-logo partner-logo-sensibull" />
                    </div>
                    <p className="universe-description">An options trading platform to create strategies, analyze positions, and examine open interest, FII/DII, and more.</p>
                </div>
                <div className="universe-partner">
                    <div className="universe-logo-wrap">
                        <span className="universe-wordmark universe-wordmark-tijori">TIJORI</span>
                    </div>
                    <p className="universe-description">An investment research platform with detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
                <div className="universe-partner">
                    <div className="universe-logo-wrap">
                        <img src="media/streakLogo.png" alt="Streak" className="universe-logo partner-logo-streak" />
                    </div>
                    <p className="universe-description">A systematic trading platform to create and backtest strategies without coding.</p>
                </div>
                <div className="universe-partner">
                    <div className="universe-logo-wrap">
                        <img src="media/smallcaseLogo.png" alt="smallcase" className="universe-logo partner-logo-smallcase" />
                    </div>
                    <p className="universe-description">A thematic investing platform for diversified baskets of stocks or ETFs.</p>
                </div>
                <div className="universe-partner">
                    <div className="universe-logo-wrap">
                        <img src="media/dittoLogo.png" alt="Ditto" className="universe-logo partner-logo-ditto" />
                    </div>
                    <p className="universe-description">Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>

            <div className="universe-signup-wrap">
                <Link className="universe-signup" to="/signup">
                    Sign up for free
                </Link>
            </div>

            <p className="universe-note">
                Want to know more about our technology stack? Check out the{" "}
                <a href="https://zerodha.tech/">Zerodha.tech blog</a>.
            </p>
        </section>
    );
}

export default Universe;