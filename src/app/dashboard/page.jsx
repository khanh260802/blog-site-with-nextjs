"use client"
import React from 'react'
import {useSession} from 'next-auth/react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import Loading from '@/components/loading/Loading'
const Dashboard = () => {
  const session =  useSession();
  console.log(session);
  const route = useRouter(); 
  if(session.status==='loading') {
    return <Loading/>
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
