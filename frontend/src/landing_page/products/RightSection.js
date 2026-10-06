import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  kiteConnect,
}) {
  const actions = [
    tryDemo !== undefined && { label: "Try demo", href: tryDemo },
    learnMore !== undefined && { label: "Learn more", href: learnMore },
    kiteConnect !== undefined && { label: "Kite Connect", href: kiteConnect },
  ].filter(Boolean);

  return (
    <section className="products-container product-section">
      <div className="product-row product-row-text-first">
        <div className="product-copy-column">
          <div className="product-copy">
            <h2 className="product-title">{productName}</h2>
            <p className="product-description">{productDescription}</p>
            {actions.length > 0 && (
              <div className="product-actions">
                {actions.map(({ label, href }) => (
                  <a
                    className="product-link"
                    href={href || undefined}
                    key={label}
                  >
                    {label} <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="product-visual">
          <img
            src={imageURL}
            alt={`${productName} platform`}
            className="img-fluid w-100 product-image"
          />
        </div>
      </div>
    </section>
  );
}

export default RightSection;
