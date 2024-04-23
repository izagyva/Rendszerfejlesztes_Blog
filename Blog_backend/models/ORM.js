import mongoose from Mongoose;

const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  name: String,
  password: String
});

const topicSchema = new Schema({
  name: String,
  type_id: Schema.Types.ObjectId,
  description: String
});

const favoriteTopicSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  topic_id: { type: Schema.Types.ObjectId, ref: 'Topic' }
});

const topicTypeSchema = new Schema({
  name: String
});

const commentSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  topic_id: { type: Schema.Types.ObjectId, ref: 'Topic' },
  body: String,
  timestamp: Date
});

const User = mongoose.model('User', userSchema);
const Topic = mongoose.model('Topic', topicSchema);
const FavoriteTopic = mongoose.model('FavoriteTopic', favoriteTopicSchema);
const TopicType = mongoose.model('TopicType', topicTypeSchema);
const Comment = mongoose.model('Comment', commentSchema);

module.exports = { User, Topic, FavoriteTopic, TopicType, Comment };