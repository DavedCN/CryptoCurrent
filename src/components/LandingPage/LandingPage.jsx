import iphone from "../../assets/iphone.png";
import gradient from "../../assets/gradient.png";

import { delay, motion } from "framer-motion";

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
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto{" "}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="blue"
        >
          Real Time .
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="buttons"
        >
          <Button link={"/dashboard"} text={"Dashboard"} />
          <Button
            className="landingpagebtn"
            text={"Share App"}
            func={handleShare}
          />
        </motion.div>
      </div>
      <div className="image-section">
        <motion.img
          src={iphone}
          alt="Crypto tracking app interface"
          initial={{ y: -25 }}
          animate={{ y: 25 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
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
