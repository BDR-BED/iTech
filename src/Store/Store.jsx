import React from "react";
import Header from "../Header/Header";
import MainCatalog from "./MainCatalog/mainCatalog";
import styles from "./Store.module.css"

const Store = () => {
    const text = "store";
    return(
        <div className={styles.storeDiv}>
            <Header subtitle={text} showBackSvg={false}/>
            <MainCatalog/>
        </div>
    )
}
export default Store;