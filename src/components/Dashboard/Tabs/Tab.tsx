import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Grid from "../Grid/Grid";
import List from "../List/List";

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

interface CoinType {
  // Define the type of your coins here
}

interface TabProps {
  coins: CoinType[];
}

const Tab: React.FC<TabProps> = ({ coins }) => {
  const [activeTab, setActiveTab] = useState<TabType>(tabs[0]);

  const handleClick = (e: React.MouseEvent, tab: TabType) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  const isSelected = (tab: TabType) => activeTab.name === tab.name;

  return (
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
            <div className={activeTab.name === "Grid" ? "grid-flex" : "list"}>
             
              {coins.map((coin, i) =>
                activeTab.name === "Grid" ? (
                  <Grid key={i} coin={coin} />
                ) : (
                  <List key={i} coin={coin} />
                )
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tab;
