import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid} from '@material-ui/core';





function Posts({ setCurrentId }) {
    const posts = useSelector((state)=> state.posts);

    console.log(posts)
    return (
        
        !posts.length ? <div className='m-5'>
            <CircularProgress /> 
       </div>
        : (
            <Grid container>
                {
                    posts.map((post)=> (
                        <Grid item key={post._id} >
                            <Post post={post} setcurrentId={setcurrentId} />
                        </Grid>
                    ))
                }
            </Grid>
        )
        
        
    );
}

export default Posts;
