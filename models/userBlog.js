const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user: {
        type: String,
        unique: true
    },
    pass: {
        type: String,
    },
    perfil: {
        type: String,
    },
    postsPreview: [
        {
            titlePreview: {
                type: String
            },
            descriptionPreview: {
                type: String
            },
            backgroundImage: {
                type: String
            },
            backgroundDefault: {
                type: String
            },
            // post: {
            //     type: mongoose.Schema.ObjectId('Post'),
            //     ref: 'Post'
            // }
        }
    ]
})

module.exports = mongoose.model('user', userSchema);