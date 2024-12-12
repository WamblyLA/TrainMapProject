import React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles["wholeBlock"]}>
            <header className={styles["header"]}>
                <div className={styles["svg-wrapper"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/60/60389.png" alt="logo" className={styles["svg"]} />
                </div>
                <div className={styles["mainInfo"]}>
                    <Link to= "/about" className={styles["about"]} id={styles["top"]}>О проекте</Link>
                    <Link to= "/tech" className={styles["about"]}>Технологии</Link>
                    <Link to= "/sense" className={styles["about"]}>Смысл проекта</Link>
                    <Link to= "/" className={styles["backsvyaz"]}>Начать работу</Link>
                </div>
            </header>
        </div>
    );
};

export default Header;