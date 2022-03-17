import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Posts from './Posts/Posts';
import { Col} from 'reactstrap';
import { getPosts } from '../redux/actions/posts'
import NewPostForm from './Form/NewPostForm';

const LeftSideBar=()=>{
    return(
        <div>
            <h1>left side bar</h1>
        </div>
    )
}


function MainComponent() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts())
    },[dispatch]);
    return (
        <div className='container'>
            <div className='row'>
                <Col className='col-md-3 bg-left'><LeftSideBar/></Col>
                <Col className='col-12 col-md-6 bg-feeds'><Posts /></Col>
                <Col className='col-md-3 bg-right'><NewPostForm /></Col>   
            </div> 
        </div>
    );
}

export default MainComponent;