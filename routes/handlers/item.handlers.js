const Item = require('./../../models/item.model');

module.exports = {
    find(req, res) {
        return Item.find();
    },
    add(req, res) {
        const {
            name,
            price,
            imgUrl,
            barcodeUrl
        } = req.payload;

        const item = new Item({
            name,
            price,
            imgUrl,
            barcodeUrl
        });

        return item.save();
    },
    delete(req, res){
        const id = req.payload.id;
        return Item.remove({_id: req.payload.id});
    }
}