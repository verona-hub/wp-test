import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import styles2 from '../styles/SinglePost.module.css';
import axios from 'axios';
import AppState from '../store/AppState';


const Posts = () => {

    const { posts, setPosts } = useContext(AppState);

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
            } catch (err) {
                console.log(err)
            }
        };

        fetchData().then();
    }, []);


    return (
        <section className={styles.Posts}>
            { posts.map(post => (
                <div className={styles2.SinglePost}>
                    <h1>{ post.title.rendered }</h1>
                    { post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "") }
                </div>
            ))}
        </section>
    );
};


export default Posts;
