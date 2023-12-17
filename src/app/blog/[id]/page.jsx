import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import axios from "axios";
import { notFound } from "next/navigation";
const BlogPost = async ({ params }) => {
    const apiURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    const getPost = async () => {
        try {
            const res = await axios(
                `${apiURL}/posts/${params.id}`
            );
            console.log(res.data);
            return res.data;
        } catch (error) {
            notFound();
        }
    };
    const post = await getPost();

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.desc}>{post.desc}</p>
                    <div className={styles.author}>
                        <Image
                            src="/illustration.png"
                            alt=""
                            className={styles.authorImg}
                            width={50}
                            height={50}
                        />
                        <p> {post.username} </p>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        alt=""
                        src={post.img}
                        className={styles.Image}
                        fill={true}
                    />
                </div>
            </div>
            <div className={styles.content}>
                {post.content.split("\n").map((text, index) => {
                    return (
                        <p key={index}>
                            {text}
                            <br></br>
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default BlogPost;
