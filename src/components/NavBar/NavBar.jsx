import React from "react";
import { GrFormSearch } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <header className={styles.navbar}>
            <div className={`${styles.nav__menu} ${styles.flex}`}>
                <span>Coins</span>
                <span>Exchanges</span>
                <span>Swap</span>
            </div>
            <div className={styles.nav__logo}>
                <img src="https://coincap.io/static/logos/black.svg" alt="coincap" />
            </div>
            <div className={`${styles.nav__actionbtn} ${styles.flex}`}>
                <div className={styles.nav__search}>
                    <GrFormSearch size={25} />
                </div>
                <div className={styles.nav__settings}>
                    <IoMdSettings size={20} />
                </div>
                <div className={styles.nav__btns}>
                    <button className="action__btn">Connect Wallet</button>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
