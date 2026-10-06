import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  coin,
  googlePlay,
  appStore,
}) {
  const actions = [
    tryDemo !== undefined && { label: "Try demo", href: tryDemo },
    learnMore !== undefined && { label: "Learn more", href: learnMore },
    coin !== undefined && { label: "Coin", href: coin },
  ].filter(Boolean);

  const badges = [
    googlePlay !== undefined && {
      label: "Google Play",
      href: googlePlay,
      image: "media/googlePlayBadge.svg",
    },
    appStore !== undefined && {
      label: "App Store",
      href: appStore,
      image: "media/appstoreBadge.svg",
    },
  ].filter(Boolean);

  return (
    <section className="products-container product-section">
      <div className="product-row product-row-image-first">
        <div className="product-visual">
          <img
            src={imageURL}
            alt={`${productName} platform`}
            className="img-fluid w-100 product-image"
          />
        </div>
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
            {badges.length > 0 && (
              <div className="product-store-badges">
                {badges.map(({ label, href, image }) => (
                  <a href={href || undefined} key={label}>
                    <img src={image} alt={label} className="img-fluid" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
