import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import styles2 from '../styles/SinglePost.module.css';
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
                <div className={styles2.SinglePost} key={post.id}>

                    <h1>{ post.title.rendered }</h1>
                    { post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").replace( /\.|&hellip;/g, '...') }

                    {/*<Link*/}
                    {/*    href={{*/}
                    {/*        pathname: `/post/[slug]`,*/}
                    {/*        query: {*/}
                    {/*            post: post,*/}
                    {/*            slug: post.slug,*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*    as={`/post/${post.slug}`}*/}
                    {/*>*/}
                    {/*    <button>Open post...</button>*/}
                    {/*</Link>*/}

                    {/*<Link href={`/post/${post.slug}`}>*/}
                    {/*    <button>Open Post</button>*/}
                    {/*</Link>*/}

                </div>
            ))}
        </section>
    );
};


export default Posts;