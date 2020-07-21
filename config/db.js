const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://esszed:12345esszed@bugloggercluster.nhtrl.mongodb.net/<dbname>?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB connected')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }

}

module.exports = connectDB