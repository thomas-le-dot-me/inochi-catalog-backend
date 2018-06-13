const ItemHandlers = require('./handlers/item.handlers');

const itemRoutes = [
    {
        method: 'GET',
        path:'/api/v1/items',
        handler: (req, res) => ItemHandlers.find(req, res)
    },  
    {
        method: 'POST',
        path:'/api/v1/items',
        handler: (req, res) => ItemHandlers.add(req, res)
    },
    {
        method: 'DELETE',
        path:'/api/v1/items',
        handler: (req, res) => ItemHandlers.delete(req, res)
    }      
]

module.exports = itemRoutes;