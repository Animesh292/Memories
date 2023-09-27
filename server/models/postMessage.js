import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String, //the image converts to string using package react-base64
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date() // for date we have used moment package
    },
});

const postMessage = mongoose.model('postMessage', postSchema);

export default postMessage;