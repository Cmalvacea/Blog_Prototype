const Post = require('./PostSchema')
const express = require('express')
const PostRoute = express()



PostRoute.get('/:id', (req, res) => {
    Post.findOne({'PostID': req.params.id}, (err, post) => {
        if(err) throw err;
        if(!post) {
            res.redirect('/')
        } else {
            res.status(200).render('article', {Title: post.Content.Title, Author: post.Details.Author, Content: post.Content.TextContent})
        }
    })
})



module.exports = PostRoute