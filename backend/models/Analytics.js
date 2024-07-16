const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  user: {
    name: String,
    category: String,
    bio: String,
    contact: String,
    links: [{ label: String, url: String }],
  },
  followers: Number,
  following: Number,
  posts: Number,
  accountReached: Number,
  accountEngaged: Number,
  contentShared: Number,
  adsRun: Number,
  activePromotions: Number,
  totalStories: Number,
  totalFollows: Number,
  totalPosts: Number,
  totalSaves: Number,
  totalComments: Number,
  totalShares: Number,
});

module.exports = mongoose.model('Analytics', AnalyticsSchema);
