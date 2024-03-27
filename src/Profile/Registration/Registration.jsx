import React from "react";
import Header from "../../Header/Header.jsx";
import styles from "./Registration.module.css"
import hide from "../../svgs/hide-svgrepo-com.svg";

const Registration = () => {
    const text = "registration";
    const previousPage = "/profile";
    return(
    <div className={styles.mainDiv}>
        <Header subtitle={text} showBackSvg={true} wayBackTo={previousPage}/>
        <div className={styles.profileDiv}>
            <div className={styles.wrapper}>
                <h1 className={styles.header}>Зареєструватись</h1>
                <input type="text" className={styles.email}/>
                <input type="password" className={styles.password}/>
                    <label>
                        <img src={hide}/>
                    </label>
                <input type="password" className={styles.password}></input>
                <p className={styles.label}>Реєструючись , ви погоджуєтесь з <span className={styles.labelUnderLine}>Умовами Обслуговування</span> iTech</p>
                <input type="button" className={styles.send} value="ДАЛІ"/>
            </div>
        </div>
    </div>
    );
}

export default Registration;