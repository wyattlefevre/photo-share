const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const photos = require("./photos.js");
const Photo = photos.model;

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    photo: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    description: String,
    created: {
        type: Date,
        default: Date.now
    },

});

const Comment = mongoose.model('Comment', commentSchema);

//post comment
router.post("/", validUser, async (req, res) => {
    if (!req.body.description || !req.body.user || !req.body.photo) {
        return res.status(400).send({
            message: "Comment cannot be empty."
        });
    }
    const comment = new Comment({
        user: req.body.user,
        photo: req.body.photo,
        description: req.body.description,
    });
    try {
        await comment.save();
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

//get all comments for a photo by photo id
router.get("/:id", async (req, res) => {
    try {
        let photo = await Photo.findOne({
            _id: req.params.id
        });
        let comments = await Comment.find({
            photo: photo
        }).sort({
            created: -1
        }).populate('user').populate('photo');
        return res.send(comments);
    } catch(error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = {
    model: Comment,
    routes: router,
}