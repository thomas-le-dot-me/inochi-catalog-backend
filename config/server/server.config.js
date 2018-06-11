require('dotenv').config();
const path = require('path');

const rootPath = path.normalize(__dirname + '/../..');

const config = {
    root: rootPath,
    host : process.env.SERVER_HOST,
    port: parseInt(process.env.SERVER_PORT, 10) || 3000,
    title: 'Food Tasker',
    hapi: {
        options: {
            routes : {
                cors: true
            }
        }
    }
}

module.exports = config;