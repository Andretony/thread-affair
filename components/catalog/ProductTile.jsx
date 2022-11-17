import Link from 'next/link';

export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <Link href="/" title="Thread Affair traveller suit">
            <picture>
              <img src="/images/products/product-01a.jpg" alt="Suit"></img>
            </picture>
          </Link>
          <span className="bagde">%</span>
        </div>

        <h1 className="product-tile-title">
          <Link href="/" title="Thread Affair traveller suit">
            Thread-Affair Traveller Suit
          </Link>
        </h1>
        <h2 className="product-tile-subtitle">
          <Link href="/" title="Thread Affair traveller suit">
            London fit semi slim
          </Link>
        </h2>
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
