import React from 'react';
import styles from '../styles/SinglePost.module.css'


const SinglePost = ({ post }) => {

    console.log(post.content)

    return (
        <div className={styles.SinglePost}>
            <h1>{ post.title.rendered }</h1>
            { post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "") }
        </div>
    );
};


export default SinglePost;
