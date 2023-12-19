import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { notFound } from 'next/navigation'
export const metadata = {
  title: 'Blog',
  description: 'This is blog page',
}
const Blog = async () => {

  const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
  const getPost = async () => { 
    try {
      const res = await fetch(apiURL+'/posts', { cache: 'force-cache' }); 
      return res.json(); 
    } catch (error) {
        notFound();
    }
  }
  const posts = await getPost(); 
  return (
    <div className={styles.container}>
      {posts.map((item) => { 
        return(
          <Link key={item._id} href={`/blog/${item._id}`} className={styles.item}>
            <div className={styles.imgContainer}>
                <Image alt='' src={item.img}
                    className={styles.img}
                    fill={true}
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Blog
