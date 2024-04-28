import iphone from "../../assets/iphone.png";
import gradient from "../../assets/gradient.png";

import { shareData } from "../../functions/sharedata";

import Button from "../Common/Button/Button";
const LandingPage = () => {
  const handleShare = async () => {
    try {
      await navigator.share(shareData);
    } catch (err) {
      console.error("Share failed:", err.message);
    }
  };

  return (
    <div className="home-container">
      <div className="text-section">
        <h1>Track Crypto </h1>
        <h2 className="blue">Real Time .</h2>
        <p>
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className="buttons">
          <Button link={"/dashboard"} text={"Dashboard"} />
          <Button
            className="landingpagebtn"
            text={"Share App"}
            func={handleShare}
          />
        </div>
      </div>
      <div className="image-section">
        <img
          src={iphone}
          alt="aCrypto tracking app interface"
          className="iphone"
        />
        <img
          src={gradient}
          alt="Crypto tracking app interface"
          className="gradient"
        />
      </div>
    </div>
  );
};

export default LandingPage;
