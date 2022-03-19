import React, {useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Posts from './Posts/Posts';
import Header from './Header';
import { Col} from 'reactstrap';
import { getPosts } from '../redux/actions/posts'
import NewPostForm from './Form/NewPostForm';
import PostCard from './Cards/PostCard';

const LeftSideBar=()=>{
    return(
        <div>
            <h1>left side bar</h1>
            <PostCard/>
        </div>
    )
}


function MainComponent() {
    const [currentId, setcurrentId] = useState(null)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch]);
    return (
        <div className='container'>
            <div className='row'>
                <Header />
                <Col className='col-md-3 bg-left'><LeftSideBar/></Col>
                <Col className='col-12 col-md-6 bg-feeds'><Posts setcurrentId={setcurrentId}/></Col>
                <Col className='col-md-3 bg-right'><NewPostForm currentId={currentId} setcurrentId={setcurrentId}/></Col>   
            </div> 
        </div>
    );
}

export default MainComponent;