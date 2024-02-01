// admin.controller.js
const Recipe = require('./recipe.model');

exports.addPost = async (req, res) => {
  try {
    // Implement logic to add a new post
    const newPost = req.body; // Assuming your request body contains the new post details
    const createdPost = await Recipe.create(newPost);
    res.status(201).json(createdPost);
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    // Implement logic to delete a post
    const postId = req.params.id;
    await Recipe.findByIdAndDelete(postId);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    // Implement logic to update a post
    const postId = req.params.id;
    const updatedPost = req.body; // Assuming your request body contains the updated post details
    await Recipe.findByIdAndUpdate(postId, updatedPost);
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    // Implement logic to delete a comment
    const commentId = req.params.id;
    const postId = req.body.postId; // Assuming postId is sent in the request body
    await Recipe.findByIdAndUpdate(postId, { $pull: { comments: { _id: commentId } } });
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
