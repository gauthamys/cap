import React from "react";
import styles from "../styles/HomeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HomeButton = () => {
    return (
        <div className={styles.circleDiv}>
            <Link href="/" className={styles.link}><FontAwesomeIcon icon={faHome} /></Link>
        </div>
    )
}

export default HomeButton;