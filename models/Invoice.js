const mongoose = require('mongoose')

const InvoiceSchema = new mongoose.Schema({
    items: [
        {
            description: {
                type: String,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
        }
    ],
    gstNumber: String,
    total: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Invoice', InvoiceSchema)