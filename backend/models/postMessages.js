//mongoose utilisation

import mongoose from 'mongoose';

//create mongoose schema
const postSchema= mongoose.Schema({
    //each post will have these properties
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, //we will convert an image into a string
    likeCount: {
        type: Number,
        default: 0
    },
    cretedAt: {
        type: Date,
        default: new Date()
    }   
})

//turn schema into a model
const PostMessage =mongoose.model('PostMessage', postSchema);

export default PostMessage;