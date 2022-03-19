import React, { useState } from 'react';
import { Form, FormGroup, Label, Card, CardBody, CardHeader, Button, Input } from 'reactstrap';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../redux/actions/posts';

function NewPostForm(currentId, setcurrentId) {

    
    const clear= ()=>{

    }
    const [postData, setPostData] = useState({
        creator: '',
        place: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const dispatch = useDispatch(); 
    const handSubmit= (e)=>{
        e.preventDefault();

        if(currentId){
            dispatch(updatePost(currentId, postData)) 
        }else{
            dispatch(createPost(postData))
        }
        
    }
    return (
        <>
        <Card>
            <CardHeader className="bg-primary text-white">
                Create a Post
            </CardHeader>
            <CardBody>
            <Form inline onSubmit={handSubmit}>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="me-sm-2" htmlFor="creator"> Been Name </Label>
                <Input id="creator" name="creator" placeholder="your name" type="text" value={postData.creator} onChange={(e)=> setPostData({ ...postData, creator: e.target.value })} />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="me-sm-2" htmlFor="place"> Place Name </Label>
                <Input id="creator" name="creator" placeholder="e.g KL University-India" type="text" value={postData.place} onChange={(e)=> setPostData({ ...postData, place: e.target.value })} />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="me-sm-2" htmlFor="message"> Caption </Label>
                <Input id="message" name="message" placeholder="about this place" type="text" value={postData.message} onChange={(e)=> setPostData({ ...postData, message: e.target.value })} />
            </FormGroup>
            <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                <Label className="me-sm-2" htmlFor="tags"> Tags </Label>
                <Input id="tags" name="tags" placeholder="tag categories. Ex: #business" type="text" value={postData.tags} onChange={(e)=> setPostData({ ...postData, tags: e.target.value })} />
            </FormGroup>
            <div className='mt-2 mb-2'>
            <FileBase
                type="file"
                multiple={false}
                onDone={({base64})=> setPostData({ ...postData, selectedFile: base64})} />
            </div>
            <div className="d-grid gap-2">
            <Button type="submit" color="primary" > Post </Button>
            <Button onClick={clear} color="danger"> Clear </Button>
            </div>
            
            </Form>
            </CardBody>
        </Card> 
        </>
    );
}

export default NewPostForm;
        