import React, { useContext } from 'react';
import styles from '@/styles/SinglePost.module.css';
import AppState from '../../store/AppState';
import { useRouter } from 'next/router'


const Post = () => {

    // const { post } = useContext(AppState);
    // const router = useRouter();
    // const { slug } = router.query;
    // console.log(slug)

    return (
        <div className={styles.SinglePost}>
            <h1> Test </h1>
            {/*<h1>Inside the post</h1>*/}
            {/*<h1>{ post.title.rendered }</h1>*/}
            {/*{ post.content.rendered.replace(/(<([^>]+)>)/gi, "") }*/}
        </div>
    );
};


export default Post;
