module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/movie_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true  
})