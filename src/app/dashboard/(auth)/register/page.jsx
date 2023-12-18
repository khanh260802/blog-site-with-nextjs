"use client"
import Button from "@/components/button/Button";
import React, { useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);
    const route = useRouter()
    const handleSubmit = async (e) => { 
        e.preventDefault();
        setPending(true);
        try {
            const res = await axios.post("/api/auth/register", {
              username,
              email,
              password
            },{headers: {
              'Content-Type': 'application/json'
            }})
            res.status === 201 && route.push('/dashboard/login')
            setPending(false)
        } catch (error) {
            setPending(false)
            setError(true)
        }
    }

    if(pending) {
        return (
            <div className={styles.container}>
                <p>loading...</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
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
                <button className={styles.button}> Register </button>
            </form>
            <Link className={styles.link} href="/dashboard/login"> Already have an account? </Link>
        </div>
    );
};

export default Register;
