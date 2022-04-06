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
        res.status(500).json(err)
    }
})

// Get one posts

// Post method to create a new post


module.exports = { app }
