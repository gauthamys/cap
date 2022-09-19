import React, { useEffect, useState } from 'react';
import commonStyles from "../styles/Common.module.css";
import styles from "../styles/WordProblems.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

export default function WordProblems(props){
    const [problem, setProblem] = React.useState('');
    const [solution, setSolution] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [prediction, setPrediction] = useState('')

    function handleProblemChange(e) {
        setProblem(e.target.value);
    }

    function fetchPrediction(mwp){
        // const encodedProblem = encodeURIComponent(mwp);
        // fetch(`http://localhost:3000/word-problem?mwp=${encodedProblem}`)
        var url = 'http://localhost:5000/mwp';
        fetch(url, {method: 'POST'})
        .then(res => res.json()).then(
            prediction => {
            setSolution(prediction.equation)
            console.log(prediction)
            return prediction
        })

    }

    function handleClick(e){
        setLoading(true);
        fetchPrediction(problem);
        setLoading(false);
    }

    return(
        <div className={commonStyles.centeredDiv}>
            <div className={commonStyles.pageHead}>
                <p className={commonStyles.title}>Word Problem Solver</p>
            </div>
            <div className={styles.container}>
                <div className={styles.questionContainer}>
                    <p>Enter word problem below!</p>
                    <textarea placeholder="Enter word problem here." value={problem} className={styles.wpInput} onChange={handleProblemChange}>
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