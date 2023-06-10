import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String, 
  author: String,
  body: String,
  date: { type: Date, default: Date.now }
});

const post = mongoose.model('Post', blogSchema);

export default post;