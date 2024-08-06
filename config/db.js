const mongoose = require('mongoose');
const config = require('dotenv').config();

const connectDB = async () => {
    try {
        const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log('connected')
    } catch(err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB