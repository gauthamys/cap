import Head from 'next/head'
import Image from 'next/image'
import commonStyles from '../styles/Common.module.css'
import styles from '../styles/Home.module.css'

import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.home}>
      <h1 className={commonStyles.title}>Numerite</h1>
      <div className={styles.container}>
        <Card src="undraw_writing.svg" title="Essays" linkTo='/essay' />
        <Card src="undraw_maths.svg" title="Word Problems" linkTo='/word-problems'/>
      </div>
    </div>
  )
}
