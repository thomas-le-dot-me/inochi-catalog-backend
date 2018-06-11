require('dotenv').config();
const mongoose = require('mongoose');

const database_host = process.env.DB_HOST; 

module.exports = {
    connect() {
        mongoose.connect(database_host);
        mongoose.connection.once('open', () => {
            console.log('Connected');
        });
    }
}