import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect, Fragment } from "react";
import Grid from "../Grid/Grid";
import List from "../List/List";
import Loader from "../../Common/Loader/Loader";

interface TabType {
  name: string;
  label: string;
}

const tabs: TabType[] = [
  {
    name: "Grid",
    label: "Grid",
  },
  {
    name: "List",
    label: "List",
  },
];

const tabContentVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -10,
    opacity: 0,
  },
};

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Adjust the delay timing here
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

interface CoinType {
  // Define the type of your coins here
}

interface TabProps {
  coins: CoinType[];
}

const Tab: React.FC<TabProps> = ({ coins }) => {
  const [activeTab, setActiveTab] = useState<TabType>(tabs[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // 20 seconds

    return () => clearTimeout(timer); // This will clear the timer when the component unmounts
  }, []);

  const handleClick = (e: React.MouseEvent, tab: TabType) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  const isSelected = (tab: TabType) => activeTab.name === tab.name;

  return (
    <Fragment>
      <div className="tabWrapper">
        <div className="tabHeader">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`tabItem ${isSelected(tab) ? "selected" : ""}`}
            >
              <a href="#" onClick={(e) => handleClick(e, tab)}>
                {tab.label}
              </a>

              {isSelected(tab) && (
                <motion.div layoutId="indicator" className="indicator" />
              )}
            </div>
          ))}
        </div>

        <div className="tabContent">
          <AnimatePresence>
            <motion.div
              key={activeTab.name || "empty"}
              variants={tabContentVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{
                duration: 0.3,
              }}
            >
              {coins?.length ? (
                <div
                  className={activeTab.name === "Grid" ? "grid-flex" : "list"}
                >
                  {coins.map((coin, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={variants}
                    >
                      {activeTab.name === "Grid" ? (
                        <Grid coin={coin} key={i} delay={(i % 4) * 0.2} />
                      ) : (
                        <List coin={coin} key={i} delay={(i % 8) * 0.2} />
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : loading ? (
                <Loader />
              ) : (
                <h1 className="no-results">No results found</h1>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Fragment>
  );
};

export default Tab;
