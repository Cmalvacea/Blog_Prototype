const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    PostID: String,
    Details: {
        Author: {
            type: String,
            default: "Christopher"
        },
        Published: {
            type: Date,
            default: Date.now
        }
    },
    Content: {
        Title: String,
        TextContent: String
    }
})


const Post = mongoose.model('Post', PostSchema)


module.exports = Post


