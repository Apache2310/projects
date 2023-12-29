import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <>
            <section>
                <div className={styles.HeadInfo}>
                    <div className={`${styles.statItem} ${styles.flexCol}`}>
                        <span>Market Cap</span>
                        <span>$1.66T</span>
                    </div>
                    <div className={`${styles.statItem} ${styles.flexCol}`}>
                        <span>Exchange Volume</span>
                        <span>$42.46B</span>
                    </div>
                    <div className={`${styles.statItem} ${styles.flexCol}`}>
                        <span>Assets</span>
                        <span>2296</span>
                    </div>
                    <div className={`${styles.statItem} ${styles.flexCol}`}>
                        <span>Exchanges</span>
                        <span>73</span>
                    </div>
                    <div className={`${styles.statItem} ${styles.flexCol}`}>
                        <span>Markets</span>
                        <span>9095</span>
                    </div>
                    <div className={`${styles.statItem} ${styles.flexCol}`}>
                        <span>Bit Dom Index</span>
                        <span>51.3%</span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
