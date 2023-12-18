import Link from 'next/link'
import React from 'react'
import styles from './button.module.css'

const Button = ({url, text, onClick}) => {
  return (
    <Link href={url}>
        <button className={styles.container} onClick={onClick || null }>
            {text}
        </button>
    </Link>
  )
}
export default Button; 

