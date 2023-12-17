import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className="">
        <p>2023@ Khanh260802. All rights reserved</p>
      </div>
      <div className={styles.socials}>
        <Image className={styles.icon} src="/1.png" alt="" width={15} height={15}/>
        <Image className={styles.icon} src="/2.png" alt="" width={15} height={15}/>
        <Image className={styles.icon} src="/3.png" alt="" width={15} height={15}/>
        <Image className={styles.icon} src="/4.png" alt="" width={15} height={15}/>
      </div>
    </div>
  )
}

export default Footer
