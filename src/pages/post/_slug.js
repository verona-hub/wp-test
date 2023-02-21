import React from 'react';
import styles from '@/styles/SinglePost.module.css';


const _slug = () => {
    return (
        <div className={styles.SinglePost}>
            <h1>Inside the post</h1>
            {/*<h1>{ post.title.rendered }</h1>*/}
            { post.content.rendered.replace(/(<([^>]+)>)/gi, "") }
        </div>
    );
};


export default _slug;
