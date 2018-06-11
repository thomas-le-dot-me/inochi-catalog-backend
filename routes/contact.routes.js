const ContactHandlers = require('./handlers/contact.handlers');

const contactRoutes = [
    {
        method: 'GET',
        path:'/api/v1/contacts',
        handler: (req, res) => ContactHandlers.find(req, res)
    },  
    {
        method: 'POST',
        path:'/api/v1/contacts',
        handler: (req, res) => ContactHandlers.add(req, res)
    }   
]

module.exports = contactRoutes;