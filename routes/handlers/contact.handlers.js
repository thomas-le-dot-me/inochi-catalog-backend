const Contact = require('./../../models/contact.model');

module.exports = {
    find(req, res) {
        return Contact.find();
    },
    add(req, res) {
        const {
            name,
            address,
            city,
            phone,
            email
        } = req.payload;

        const contact = new Contact({
            name,
            address,
            city,
            phone,
            email
        });

        return contact.save();
    }
}