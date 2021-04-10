const Post = require('../models/post');
const slugify = require('slugify');


exports.create = (req, res) => {
    // console.log(req.body);
    const {title, content, user} = req.body
    const slug = slugify(title)
    
    // validate

    switch(true) {
        case !title:
        return res.status(400).json({error: 'title is required'});
        case !content:
        return res.status(400).json({error: 'content is required'});
    }
    
    Post.create({title, content, user, slug}, (err, post) => {
        if(err){
            console.log(err)
            res.status(400).json({error: 'duplicate post. Try another title.'})
        }

        res.json(post);

    })


    
  };