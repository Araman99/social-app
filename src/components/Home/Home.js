import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Posts from '../Posts/Posts';

const Home = () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        Axios.get(url)
            .then(function (data) {
                setPosts(data.data)
            })
            .catch(function (error) {
                console.log("Error massage :", error);
            })
    }, []);
    return (
        <div>
            {
                posts.map( post => <Posts post={post} key={post.id}></Posts>)
            }
            
        </div>
    );
};

export default Home;