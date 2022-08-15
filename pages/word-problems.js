import React from "react";
import commonStyles from "../styles/Common.module.css";
import styles from "../styles/WordProblems.module.css";
import flask from '../public/flask1.svg';
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

export default function WordProblems(props){
    const [problem, setProblem] = React.useState('');
    const [solution, setSolution] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    function handleProblemChange(e) {
        setProblem(e.target.value);
    }
    function handleClick(e){
        //setSolve(!solve);
        setLoading(true);
        setSolution('');
        // fetch solution from server and display it
        setTimeout(() => {
            setSolution('Solution');
            setLoading(false);
        }, 5000);
    }
    return(
        <div className={commonStyles.centeredDiv}>
            <div className={commonStyles.pageHead}>
                <p className={commonStyles.title}>Word Problem Solver</p>
            </div>
            <div className={styles.container}>
                <div className={styles.questionContainer}>
                    <p>Enter word problem here</p>
                    <textarea placeholder="> " value={problem} className={styles.wpInput} onChange={handleProblemChange}>
                    </textarea>
                    <a className={styles.submit} onClick={handleClick}>
                        <FontAwesomeIcon icon={faFlask} /> solve
                    </a>
                </div>
                <div className={styles.solution}>
                    <img src='/flask.svg' className={loading ? styles.bgImage : styles.bgImageHidden}/>
                    <p>{solution}</p>
                </div>
            </div>
        </div>    
    )
}