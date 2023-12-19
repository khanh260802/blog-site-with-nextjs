'use client'
import Image from 'next/image';
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import axios from 'axios';
import Loading from '@/components/loading/Loading';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const session  = useSession(); 
  const route = useRouter(); 

  const handleSubmit = async (e) => { 
    e.preventDefault();
    signIn("credentials", {email, password})
  }
  
  if(session.status==='loading') {
    return <Loading/>
  } else if (session.status==='authenticated') {
    axios.post('/api/auth/register', {
      username:session.data.user.name,
      email:session.data.user.email,
      password: session.data.user.email
    },{headers: {
      'Content-Type': 'application/json'
    }}); 
    route.push('/dashboard');
  } else {
    return (
      <div className={styles.container}>
          <h2>Log in to your account</h2>

          <button className={styles.button2} onClick={() => signIn('google')}>  
            <Image src='/google.png' alt='google' width={20} height={20} 
            className={styles.icon}/>
            <span className={styles.buttonText}>Sign in with google</span>
          </button>
          <button className={styles.button2}  onClick={() => signIn('github')}>  
            <Image src='/github.png' alt='github' width={20} height={20} 
            className={styles.icon}/>
            <span className={styles.buttonText}>Sign in with github</span>
          </button>

          <div className={styles.orContainer}>
            <hr className={styles.hr} />
            <span className={styles.buttonText}>OR</span>
            <hr className={styles.hr}/>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
              <input
                  className={styles.input}
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
              />
              <input
                  className={styles.input}
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
              />
              {error && <p className={styles.error}>Something went wrong!</p>}
              <button className={styles.button}> Login </button>
          </form>
          <div className={styles.links}>
            <Link className={styles.link} href="#"> Forgot your password? </Link>
            <Link className={styles.link} href="/dashboard/register"> Create an account </Link>
          </div>
      </div>
    )
  }
}

export default Login
