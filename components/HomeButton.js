import React from "react";
import styles from "../styles/HomeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const HomeButton = () => {
    return (
        <div className={styles.circleDiv}>
            <a href="/"><FontAwesomeIcon icon={faHome} /></a>
        </div>
    )
}

export default HomeButton;