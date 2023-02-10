// ---------------
// Based Veriables
// ---------------
const mongoose = require('mongoose');
// ---------------


// ---------------
// Schema
// ---------------
const itemsSchema = new mongoose.Schema({
    first_nm: {
        type: String,
        required: [true, 'First name is required'],
    },

    last_nm: {
        type: String,
        required: [true, 'Last name is required'],
    },

    email: {
        type: String
    },

    phone_num: {
        type: String
    },
    
    address: {
        type: String
    },
})
// ---------------



// ---------------
// Export Schema
// ---------------
const Items = mongoose.model('Items', itemsSchema);
module.exports = Items;
// ---------------













