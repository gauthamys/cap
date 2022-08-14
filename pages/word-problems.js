import React from "react";
import commonStyles from "../styles/Common.module.css";
import styles from "../styles/WordProblems.module.css";

export default function WordProblems(props){
    return(
        <div className={commonStyles.centeredDiv}>
            <div className={commonStyles.pageHead}>
                <p className={commonStyles.title}>Word Problem Solver</p>
            </div>
            <div className={styles.wordProblemInput}>

            </div>
        </div>    
    )
}