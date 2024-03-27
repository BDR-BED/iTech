import React , {useState} from "react"
import styles from "./Header.module.css"
import burger from "../svgs/burger.svg"
import logo from "../svgs/profile.svg"
import acc from "../svgs/acc.svg"
import backSvg from "../svgs/back-svgrepo-com.svg"
import { NavLink } from "react-router-dom";

const Header = (props) => {

    const [displayStyle, setDisplayStyle] = useState('none');
    const toggleDisplayStyle = () => {
      setDisplayStyle(displayStyle === 'none' ? 'flex' : 'none');
    };

    function openInstagramProfile() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            window.location.href = 'intent://user?username=itech.lviv/#Intent;package=com.instagram.android;scheme=https;end';
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = 'instagram://user?username=itech.lviv';
        } else {
            window.location.href = 'https://www.instagram.com/itech.lviv?igsh=ZGNzOGxlaXhjdDZm';
        }
    }
    function openTikTokProfile() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        if (/android/i.test(userAgent)) {
            window.location.href = 'tiktok://user?username=itech.lviv';
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            window.location.href = 'tiktok://user?username=itech.lviv';
        } else {
            window.location.href = 'https://www.tiktok.com/@itech.lviv?_t=8l0sE0iPtyg&_r=1';
        }
    }
  
    return(
        <div>
            <div className={styles.bigWrapper}>
                <div className={styles.wrapper}>
                <NavLink to="/profile"><img src={acc} alt="s" href="/profile" className={styles.acc}/></NavLink>
                    <div className={styles.logoHolder}>
                        <img src={logo} alt="s" className={styles.logo}/>
                        <span className={styles.underLogo}>{props.subtitle}</span>
                    </div>
                    <img src={burger} alt="s" className={styles.burger} onClick={toggleDisplayStyle}/>
                </div>
                <div className={styles.borderBottom}>
                </div>
               { props.showBackSvg ? <NavLink to={props.wayBackTo}><img src={backSvg} className={styles.backSvg} alt="s"/></NavLink> : null}
            </div>

            <div className={styles.mainBurger} style={{ display: displayStyle }}>
                <div className={styles.blurDiv}></div>

                <div className={styles.burgerContent}>
                <img onClick={toggleDisplayStyle} src={backSvg} className={styles.backSvgBurger} alt="s"/>

                    <div className={styles.languagesSwitch}><span className={styles.underLineLanguage}>УКР</span>&nbsp;/&nbsp;<span className={styles.underLineLanguage}>ENG</span></div>
                    <div className={styles.busket}>Кошик</div>
                    <div className={styles.orders}>Мої замовлення</div>
                    <div onClick={openInstagramProfile} className={styles.instagram}>Інстаграм</div>
                    <div onClick={openTikTokProfile} className={styles.tikTok}>ТікТок</div>
                    <div className={styles.discount}>Акції</div>
                    <div className={styles.aboutUs}>Про нас</div>
                    <div className={styles.cooperation}>Співпраця</div>
                    <div className={styles.wantWebLikeThis}>Хочу такий Сайт</div>
                    <div className={styles.profile}>
                        <div className={styles.profileText}>Профіль</div>
                        <div className={styles.buttonsWrapper}>
                            <NavLink to="/login" ><button className={styles.logInButton}>УВІЙТИ</button></NavLink>
                            <NavLink to="/registration" ><button className={styles.registerButton}>РЕЄСТРАЦІЯ</button></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;

//don't forget about props SUBTITLE !!!
//не забуваємо про пропс SUBTITLE !!!