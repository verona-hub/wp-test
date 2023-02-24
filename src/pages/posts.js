import React, { useContext, useEffect } from 'react';
import styles from '@/styles/Home.module.css'
import styles2 from '../styles/SinglePost.module.css';
import axios from 'axios';
import AppState from '../store/AppState';
import Link from 'next/link';


const Posts = () => {

    const { posts, setPosts } = useContext(AppState);
    console.log(`Initial state: ${posts}`)

    const config = {
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    useEffect( () => {
        const fetchData = async () => {
            const response = await axios(config);
            if(response) {
                setPosts(response.data);
                console.log(`After setPosts: ${posts}`)
            }
        };
        fetchData().then();
    }, []);

    // useEffect(() => {
    //     console.log(`After useEffect: ${posts}`)
    //     const fetchData = async () => {
    //         console.log(`After fetchData: ${posts}`)
    //         try {
    //             const response = await axios(config);
    //             console.log(`After response: ${posts}`)
    //             if(response) {
    //                 setPosts(response.data);
    //                 console.log(`After setPosts: ${posts}`)
    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };
    //
    //     fetchData().then();
    // }, []);


    return (
        <section className={styles.Posts}>
            { posts?.map(post => (
                <div className={styles2.SinglePost} key={post.id}>

                    <h1>{ post.title.rendered }</h1>
                    { post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "") }

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
