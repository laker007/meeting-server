module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 365 * 24 * 60 * 60 * 1000,
  },
  mongodb: 'mongodb://localhost:27017/meeting'
};
