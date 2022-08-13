import React from "react";
import styles from "../styles/Essay.module.css";
import commonStyles from "../styles/Common.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Essay(props){
    return(
        <div className={commonStyles.centeredDiv}>
            <div className={commonStyles.pageHead}>
                <p className={commonStyles.title}>Essay Assessment</p>
            </div>
            <div className={styles.essayInput}>
                <div className={styles.prompt}>
                    <p>Prompt</p>
                    <button href='/essay' className={styles.submitEssay}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
                <textarea className={styles.textarea} placeholder="Write your essay here..."></textarea>
            </div>
        </div>
    )
}