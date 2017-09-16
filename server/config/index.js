var config = require('./config.global');

config.env = "development";
config.port = 3001;
config.mongo = {};
config.mongo.connectionstring = 'mongodb://fishing:fishingforseniors@ds135514.mlab.com:35514/fishingforseniors';
config.TOKEN_SECRET = process.env.TOKEN_SECRET || 'A hard to guess string';
config.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'MT9lLk7jNAxEly_oPeUOJ_4N';
config.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '392506088557-apmrb312kt89uohpp3ri286oj6oloj3r.apps.googleusercontent.com';
config.MONGO_URI = process.env.MONGO_URI || 'localhost';
config.GOOGLE_SECRET = process.env.GOOGLE_SECRET || 'Google Client Secret';
config.TWITTER_KEY = process.env.TWITTER_KEY || 'Twitter Consumer Key';
config.TWITTER_SECRET = process.env.TWITTER_SECRET || 'Twitter Consumer Secret';
config.TWITTER_CALLBACK = process.env.TWITTER_CALLBACK || 'Twitter Callback URL';
module.exports = config;
