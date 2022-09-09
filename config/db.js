const mongoose = require('mongoose');

const connectionDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    } catch(err){
        console.log(`Error: ${err.message}`);
    }
};

module.exports = connectionDB