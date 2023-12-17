import Link from 'next/link';
import React from 'react'
import styles from './page.module.css'
export const metadata = {
  title: 'Portfolio',
  description: 'This is Portfolio page',
}
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <p className={styles.selectTitle}> Choose a gallery </p>
      <div className={styles.items}>
        <Link className={styles.item} href='/portfolio/Illustrations'>
          <span className={styles.title}> Illustrations </span>
        </Link>
        <Link className={styles.item} href='/portfolio/Websites'>
          <span className={styles.title}> Websites </span>
        </Link>
        <Link className={styles.item} href='/portfolio/Application'>
          <span className={styles.title}> Application </span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio; 
