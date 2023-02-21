import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Posts from '@/components/Posts';
import AppState from '../store/AppState';


export default function Home() {

    const [posts, setPosts] = useState([]);

    return (
        <AppState.Provider
            value={{ posts, setPosts }}
        >
            <Head>
                <title>Wordpress test</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Posts />
            </main>
        </AppState.Provider>
    )
}
