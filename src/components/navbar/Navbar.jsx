"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'
import Button from '@/components/button/Button';
import  DarkModeToggle  from '@/components/DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
const Navbar = () => {
  const links = [
    {
      id: 1, 
      title: 'Home', 
      url: '/'
    }, 
    {
      id: 2, 
      title: 'Blog', 
      url: '/blog'
    }, 
    {
      id: 3, 
      title: 'About', 
      url: '/about'
    }, 
    {
      id: 4, 
      title: 'Contact', 
      url: '/contact'
    }, 
    {
      id: 5, 
      title: 'Dashboard', 
      url: '/dashboard'
    }, 
    {
      id: 6, 
      title: 'Portfolio', 
      url: '/portfolio'
    }, 
  ]
  const session = useSession(); 
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href='/'>Khanh260802 </Link>    
      <div className={styles.links}>
        <DarkModeToggle/>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}      
        {session.status==='authenticated' && <Button url='' text='Logout' onClick={signOut}/>}
      </div>
    </div>
  )
}

export default Navbar
