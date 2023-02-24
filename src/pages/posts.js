import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import axios from 'axios';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    const config = {
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios(config);
                setPosts(response.data);
            } catch (err) { console.log(err) }
        };

        fetchData().then();
    }, []);


    return (
        <section className={styles.Posts}>
            { posts?.map(post => (
                <section
                    post={ post }
                    key={ post.id }
                />
            ))}
        </section>
    );
};


export default Posts;