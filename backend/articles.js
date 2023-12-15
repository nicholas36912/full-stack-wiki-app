const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String, required: true },
  categories: [{ type: String }], 
  createdAt: { type: Date, default: Date.now }, 
  updatedAt: { type: Date }, 
  views: { type: Number, default: 0 },
});

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;