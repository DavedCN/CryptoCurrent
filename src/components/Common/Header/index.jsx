import { useState } from "react";
import Button from "../Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="companyName">
        CryptoCurrent <span className="blue">.</span>{" "}
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/compare">Compare</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/news">News</a>
        <a href="" className="mobile">
          <Button
            className="headerbutton"
            link={"/dashboard"}
            text="Dashboard"
          />
        </a>
      </nav>
      <div className="menuIcon" onClick={handleMenuClick}>
        ☰
      </div>
    </header>
  );
};

export default Header;
