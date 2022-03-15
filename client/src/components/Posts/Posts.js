import React from 'react';
import { useSelector } from 'react-redux';


import Post from './Post/Post';


function Posts() {
    const posts = useSelector((state)=> state.posts);

    console.log(posts)
    return (
        <>
            <Post />
            <Post />
            <Post />
        </>
    );
}

export default Posts;