import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 onClick={() => navigate("/")}>
          CryptoCurrent <span className="blue">.</span>{" "}
        </h3>
        <p>Your real-time crypto tracker.</p>
        <div className="social-icons">
          <i>
            <FaXTwitter />
          </i>

          <i>
            <FaInstagram />
          </i>
          <i>
            <IoLogoFacebook />
          </i>
          <i>
            <IoLogoWhatsapp />
          </i>
        </div>
      </div>
      <p className="footerp">
        © 2024 CryptoCurrent. All rights reserved by
        <a href="https://github.com/DavedCN" target="_blank">
          DavedCN
        </a>
        <span>.</span>
      </p>
    </footer>
  );
};

export default Footer;
