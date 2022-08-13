import React from "react";
import styles from "../styles/Essay.module.css";
import commonStyles from "../styles/Common.module.css";

export default function Essay(props){
    return(
        <div className={commonStyles.centeredDiv}>
            <div className={commonStyles.pageHead}>
                <p className={commonStyles.title}>Essay Assessment</p>
            </div>
            <div className={styles.essayInput}>
                <div class={styles.prompt}>
                    <p>Prompt</p>
                    <button href='/essay' className={styles.submitEssay}>Submit to see score and feedback</button>
                </div>
                <textarea className={styles.textarea} placeholder="Write your essay here..."></textarea>
            </div>
        </div>
    )
}