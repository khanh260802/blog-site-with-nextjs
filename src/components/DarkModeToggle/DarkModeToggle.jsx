import React, { useContext } from 'react'
import styles from './DarkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'
const DarkModeToggle = () => {
    const {mode, toggle} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔅</div>
        <div className={styles.ball} 
        style={mode==='dark' ? {transform: "translateX(2px)"} : {transform: "translateX(22px)"}}/>
    </div>
  )
}

export default DarkModeToggle
