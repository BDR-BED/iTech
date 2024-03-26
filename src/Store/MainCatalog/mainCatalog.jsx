import React from "react";
import styles from "./MainCatalog.module.css"
import logo from "../../svgs/pngwing.com (8).png"
const MainCatalog = () => {
    return(
    <div className={styles.mainWrapper}>
        <div className={styles.catalogElement}><img src={logo} alt="s" className={styles.logo}/><span className={styles.underLogo}>Годинники</span></div>
        <div className={styles.catalogElement}><img src={logo} alt="s" className={styles.logo}/><span className={styles.underLogo}>Годинники</span></div>
        <div className={styles.catalogElement}><img src={logo} alt="s" className={styles.logo}/><span className={styles.underLogo}>Годинники</span></div>
        <div className={styles.catalogElement}><img src={logo} alt="s" className={styles.logo}/><span className={styles.underLogo}>Годинники</span></div>
        <div className={styles.catalogElement}><img src={logo} alt="s" className={styles.logo}/><span className={styles.underLogo}>Годинники</span></div>
        <div className={styles.catalogElement}><img src={logo} alt="s" className={styles.logo}/><span className={styles.underLogo}>Годинники</span></div>
        <div className={styles.catalogElement}><img src={logo} alt="s" className={styles.logo}/><span className={styles.underLogo}>Годинники</span></div>
        <div className={styles.catalogElement}><img src={logo} alt="s" className={styles.logo}/><span className={styles.underLogo}>Годинники</span></div>
    </div>
    )
};

export default MainCatalog;