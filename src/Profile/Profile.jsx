import React from "react";
import Header from "../Header/Header.jsx";
import styles from "./Profile.module.css"

const Profile = () => {
    const text = "profile";
    const previousPage = "/"
    return(
    <div className={styles.mainDiv}>
        <Header subtitle={text}  showBackSvg={true} wayBackTo={previousPage}/>
        <div className={styles.profileDiv}>
            <div className={styles.svgBackGround}></div>
            <div className={styles.mainTextConteiner}>
                <span className={styles.mainText}>Доєднюйся до нас та отримай SALE CARD</span>
            </div>
            <div className={styles.buttonsContainer}>
                <a href="/logIn"><button className={styles.logInButton}>УВІЙТИ</button></a>
                <a href="/registration"><button className={styles.registerButton}>ЗАРЕЄСТРУВАТИСЬ</button></a>
            </div>
        </div>
    </div>
    );
}

export default Profile;