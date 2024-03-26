import React from "react";
import Header from "../../Header/Header.jsx";
import styles from "./LogIn.module.css"

const LogIn = () => {
    const text = "log in";
    const previousPage = "/profile";
    return(
    <div className={styles.mainDiv}>
        <Header subtitle={text} showBackSvg={true} wayBackTo={previousPage}/>
        <div className={styles.profileDiv}>
           
        </div>
    </div>
    );
}

export default LogIn;