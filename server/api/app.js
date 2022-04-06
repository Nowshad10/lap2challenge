const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


app.use(express.json());


const Post = require('./models/Post')

app.get('/', (req, res) => {
    res.send('Hello World!')
});

// Get all posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.all
        res.status(200).json({posts})
    } catch (err) {
        res.status(422).json(err)
    }
})

app.get('/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(parseInt(req.params.id))
        res.status(200).json(post)
    } catch (err) {
       res.status(500).json(err) 
    }
})

app.post('/posts', async (req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(201).json(post)
    } catch (err) {
        res.status(422).json(err)
    }
})

// Get one posts

// Post method to create a new post



module.exports = app 
