import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuIconRef = useRef(null); // Create a ref for the menu icon

  const navigate = useNavigate();

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the user scrolls or clicks outside the menu icon
  useEffect(() => {
    const handleClose = (event) => {
      // If the click event's target is the menu icon, return early
      if (menuIconRef.current && menuIconRef.current.contains(event.target)) {
        return;
      }

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleClose);
    window.addEventListener("click", handleClose);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("click", handleClose);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="companyName" onClick={() => navigate("/")}>
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
      <div className="menuIcon" onClick={handleMenuClick} ref={menuIconRef}>
        ☰
      </div>
    </header>
  );
};

export default Header;
