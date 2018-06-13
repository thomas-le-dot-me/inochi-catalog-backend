const config = require('./config/server/server.config');
const mongoosedb = require('./config/database/database.config');
const hapi = require('hapi');
const ItemRoutes = require('./routes/item.routes');

const server = hapi.server({
    port : config.port,
    host: config.host,
    routes: config.hapi.options.routes
});

const init = async () => {
    await mongoosedb.connect();
    await server.start();
    
    server.route(ItemRoutes);
    console.log('Server is running at : ' + server.info.uri);


}

init();

