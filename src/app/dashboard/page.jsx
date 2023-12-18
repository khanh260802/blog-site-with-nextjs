"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
const Dashboard = () => {
  const session =  useSession();
  console.log(session);
  const route = useRouter(); 
  if(session.status==='loading') {
    return (
      <div className={styles.container}>
          <p>loading...</p>
      </div>
    )
  }
  else if( session.status === 'unauthenticated') {
    route?.push('/dashboard/login')
  } 
  if( session.status === 'authenticated') {
    return (
      <div>
        Dashboard
      </div>
    )
  } 
}

export default Dashboard; 
