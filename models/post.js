const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    // publisher: {
    //     type: mongoose.Schema.ObjectId('Post'),
    //     ref: 'Post'
    // },
    tags: [],
    content: [
        {
            element: String,
            class: String,
            content: String,
        }
    ],
})

module.exports = mongoose.model('Post', postSchema);