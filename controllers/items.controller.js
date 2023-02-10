const Items = require('../models/items.model');

// get all items
exports.getAllItems = async (req, res, next) => {
    try {
        const items = await Items.find();
        res.status(200).json(items);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}



// create a new item
exports.createItem = async (req, res) => {
    try {
        const items = await Items.create(req.body);
        res.status(200).json(items);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}


// update an item
exports.updateItem = async (req, res) => {
    try {
        const items = await Items.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({items, status:'Success'});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}


// delete an item
exports.deleteItem = async (req, res) => {
    try {
        const items = await Items.findByIdAndDelete(req.params.id);
        res.status(200).json(items);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}


// get an item by id
exports.getItemById = async (req, res) => {
    try {
        const items = await Items.findById(req.params.id);
        res.status(200).json(items);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}

