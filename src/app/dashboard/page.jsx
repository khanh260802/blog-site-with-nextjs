"use client"
import React, { useState } from 'react'
import {useSession} from 'next-auth/react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Loading from '@/components/loading/Loading'
import axios from 'axios'
import useSWR from 'swr'
import Image from 'next/image'
import Link from 'next/link'
const Dashboard = () => {
  const session =  useSession();
  const route = useRouter(); 
  const fetcher = (...args) => axios(...args).then(res => res.data); 
  const {data, mutate, error, isLoading} = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

  const [title , setTitle] = useState('');
  const [desc, setDesc] = useState(''); 
  const [image, setImage] = useState(''); 
  const [content, setContent] = useState(''); 
  const clearInputs = () => {
    setTitle(''); 
    setDesc(''); 
    setImage(''); 
    setContent('');
  }
  const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try {
      await axios.post("/api/posts", { 
        title, 
        desc, 
        img: image, 
        content, 
        username:session?.data?.user.name
      })
      mutate(); 
    } catch (error) {
      console.log(error)
    }
    clearInputs(); 
  }

  const handleDelete = async (id) => { 
    try {
      await axios.delete(`/api/posts/${id}`)
      mutate(); 
    } catch (error) {
      console.log(error)
    }
  }

  if(session.status==='loading') {
    return <Loading/>
  }
  else if( session.status === 'unauthenticated') {
    route?.push('/dashboard/login')
  } 
  if( session.status === 'authenticated') {
    return (
    <div className={styles.container}>
        <div className={styles.contentContainer}>
        {data?.map((item) => { 
          return(
            <div  key={item._id} className={styles.item2}>
              <Link href={`/blog/${item._id}`} className={styles.item}>
                <div className={styles.imgContainer}>
                    <Image alt='' src={item.img}
                        className={styles.img}
                        width={200}
                        height={150}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>{item.title}</h1>
                </div>
              </Link>
              <button  className={styles.delete} onClick={() => handleDelete(item._id)}>❌</button>
            </div>
          )
        })}
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input onChange={(e)=>setTitle(e.target.value)} value={title} type='text' placeholder='title' className={styles.input}  required/>
          <input onChange={(e)=>setDesc(e.target.value)} value={desc} type='text' placeholder='description' className={styles.input}  required/>
          <input onChange={(e)=>setImage(e.target.value)} value={image} type='text' placeholder='image' className={styles.input}  required/>
          <textarea onChange={(e)=>setContent(e.target.value)}value={content} placeholder='content' className={styles.textArea} cols="30" rows="10" required/>
          <button className={styles.button}>Send</button>
        </form>
    </div>
    )
  } 
}

export default Dashboard; 
