import React from "react"
import styles from "./Header.module.css"
import burger from "../svgs/burger.svg"
import logo from "../svgs/profile.svg"
import acc from "../svgs/acc.svg"
import backSvg from "../svgs/back-svgrepo-com.svg"

const Header = (props) => {

    return(
            <div>
            <div className={styles.bigWrapper}>
                <div className={styles.wrapper}>
                <a href="/profile"><img src={acc} alt="s" href="/profile" className={styles.acc}/></a>
                    <div className={styles.logoHolder}>
                        <img src={logo} alt="s" className={styles.logo}/>
                        <span className={styles.underLogo}>{props.subtitle}</span>
                    </div>
                    <img src={burger} alt="s" className={styles.burger}/>
                </div>
                <div className={styles.borderBottom}>
                </div>
               { props.showBackSvg ? <a href={props.wayBackTo}><img src={backSvg} className={styles.backSvg} alt="s"/></a> : null}
            </div>

            </div>
    )
}

export default Header;

//don't forget about props SUBTITLE !!!
//не забуваємо про пропс SUBTITLE !!!