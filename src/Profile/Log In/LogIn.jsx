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
            <div className={styles.wrapper}>
                <h1 className={styles.header}>Зареєструватись</h1>
                <input type="text" className={styles.email}/>
                <input type="password" className={styles.password}/>
                <input type="button" className={styles.send} value="УВІЙТИ"/>
            </div>
        </div>
    </div>
    );
}

export default LogIn;