import React, { useEffect, useState } from 'react';
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
    const [data, setData] = useState('')

    // useEffect(()=> {
    //   fetch("http://localhost:3080").then(
    //     res => res.json()
    //   ).then(
    //     data => {
    //       setData(data)
    //       console.log(data)
    //     }
    //   )
    // }, [])

    function handleProblemChange(e) {
        setProblem(e.target.value);
    }

    function fetchPrediction(){
        fetch("http://localhost:3080/word-problem").then(
          res => res.json()
        ).then(
              data => {
              setData(data)
              console.log(data)
            }
        )
    }

    function handleClick(e){
        //setSolve(!solve);
        setLoading(true);
        var equation = "a+b=c"
        fetchPrediction()
        // var equation = fetchPrediction(<take PROBLEM VALUE>);
        if(equation){
            setSolution(equation);
            setLoading(false);
        }
        // fetch solution from server and display it
        // setTimeout(() => {
        //     setSolution('Solution');
        //     setLoading(false);
        // }, 5000);
    }

    return(
        <div className={commonStyles.centeredDiv}>
            <div className={commonStyles.pageHead}>
                <p className={commonStyles.title}>Word Problem Solver</p>
            </div>
            <div className={styles.container}>
                <div className={styles.questionContainer}>
                    <p>Enter word problem below!</p>
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