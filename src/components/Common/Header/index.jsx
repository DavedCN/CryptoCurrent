import { useState, useEffect } from "react";
import Button from "../Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

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
