const mongoose = require('mongoose')

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL, { useMongoClient: true })
} else {
    mongoose.connect("mongodb://localhost/designingYourLife", { useCreateIndex: true, useNewUrlParser: true });
}

mongoose.Promise = Promise

module.exports = mongoose