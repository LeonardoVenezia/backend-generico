const mongoose = require('mongoose')

const postPreviewSchema = new mongoose.Schema({
    // publisher: {
    //     type: mongoose.Schema.ObjectId('Post'),
    //     ref: 'Post'
    // },
    tags: [],
    background: String,
    content: [
        {
            element: String,
            class: String,
            content: String,
        }
    ],
})

module.exports = mongoose.model('PostPreview', postPreviewSchema);