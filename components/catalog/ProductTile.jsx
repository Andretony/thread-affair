export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <picture>
            <img src="/images/product/product-01a.jpg" alt="Suit"></img>
          </picture>

          <span className="bagde">%</span>
        </div>

        <h1 className="product-tile-title">Thread-Affair Traveller Suit</h1>
        <h2 className="product-tile-subtitle">London fit semi slim</h2>
      </header>

      <section className="product-tile-pricing">
        <span className="product-price-regular">399.00</span>

        <span className="product-pricing">USD 270.00</span>
      </section>

      <footer className="product-tile-footer">
        <button className="button" title="Add to cart" type="button">
          Add to cart
        </button>
      </footer>
    </article>
  );
}
