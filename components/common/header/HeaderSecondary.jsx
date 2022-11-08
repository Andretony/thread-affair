import Link from 'next/link';

export default function HeaderSecondary() {
  return (
    <>
      <div className="header-logo">
        <Link href="/" title="Thread Affair">
          <img src="/images/logo.jpg" alt="Thread Affair - Logo"></img>
        </Link>
      </div>

      <div className="header-search d-lg-none">
        <ul>
          <li>
            <Link href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </Link>
          </li>

          <li>
            <Link href="/" title="Search">
              <i className="fa-solid fa-search"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="header-support d-none">
        <ul>
          <li>
            <a href="tel:+07413456" title="Call us">
              Toll Free 1-977-666-1840
            </a>
          </li>

          <li>
            <a href="mailto:wtc@pixellab.ro" title="Email us">
              office@treadaffair.com
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <Link href="/" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </li>

          <li>
            <Link href="/" title="My Account">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
