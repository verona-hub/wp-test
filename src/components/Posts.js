import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SinglePost from '@/components/SinglePost';


const Posts = () => {

    const [posts, setPosts] = useState(null);

    const config = {
        method: 'GET',
        url: 'http://192.168.1.16/wordpress/wp-json/wp/v2/posts',
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
                console.log(response.data)
            } catch (err) {
                console.log(err)
            }
        };

        fetchData().then();

    }, []);

    return (
        <div>
            <SinglePost />
        </div>
    );
};

export default Posts;
