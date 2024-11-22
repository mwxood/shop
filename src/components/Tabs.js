import { useState } from 'react';
import styles from './styles/Tabs.module.css';

const Tabs = ({ navItems, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <ul className={`${styles.tabsNav} d-flex removeListStyle`}>
        {navItems.map((item, index) => (
          <li
            key={index}
            className={activeTab === index ? styles.active : ''}
            onClick={() => handleTabClick(index)}
          >
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className={styles.tabsContent}>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
