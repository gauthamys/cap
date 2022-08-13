import React, { useEffect, useState } from "react";
import styles from "../styles/Essay.module.css";
import commonStyles from "../styles/Common.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Essay(props){
    const [prompts, setPrompts] = useState([]);
    
    useEffect(() => {
        // fetch prompts from the database
        setPrompts([
            'prompt1', 'prompt2', 'prompt3', 'prompt4', 'prompt5', 'prompt6', 'prompt7', 'prompt8', 'prompt9', 'prompt10'
        ])
    }, [])

    return(
        <div className={commonStyles.centeredDiv}>
            <div className={commonStyles.pageHead}>
                <p className={commonStyles.title}>Essay Assessment</p>
            </div>
            <div className={styles.essayInput}>
                <div className={styles.prompt}>
                    <p>Prompt</p>
                    <select>
                        {
                            prompts.map((prompt, index) => {
                                return <option key={index}>{prompt}</option>
                            })
                        }
                    </select>
                    <button href='/essay' className={styles.submitEssay}>
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </button>
                </div>
                <textarea className={styles.textarea} placeholder="Write your essay here..."></textarea>
            </div>
        </div>
    )
}