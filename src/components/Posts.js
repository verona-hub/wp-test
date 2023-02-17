import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import axios from 'axios';
import SinglePost from '@/components/SinglePost';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    const config = {
        method: 'GET',
        url: 'http://192.168.1.16/wordpress/wp-json/wp/v2/posts',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios(config);
            setPosts(response.data);
            console.log(response.data)
        } catch (err) {
            console.log(err)
        }
    };

    fetchData().then();


    return (
        <section className={styles.Posts}>
            { posts.map(post => (
                <SinglePost
                    post={ post }
                    key={ post.id }
                />
            ))}
        </section>
    );
};


export default Posts;
