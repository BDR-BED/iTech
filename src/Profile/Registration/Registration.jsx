import React from "react";
import Header from "../../Header/Header.jsx";
import styles from "./Registration.module.css"

const Registration = () => {
    const text = "registration";
    const previousPage = "/profile";
    return(
    <div className={styles.mainDiv}>
        <Header subtitle={text} showBackSvg={true} wayBackTo={previousPage}/>
        <div className={styles.profileDiv}>
           
        </div>
    </div>
    );
}

export default Registration;