const express = require("express");
const Invoice = require("../models/Invoice");
const router = express.Router();

// create invoice
router.post("/", async (req, res) => {
  try {
    const { items, gstNumber, total } = req.body;
    const invoice = new Invoice({
      items,
      gstNumber,
      total,
    });

    await invoice.save();
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({
        error: error.message
    })
  }
});


router.get('/', async (req, res) => {
    try {
        const invoices = await Invoice.find()
        res.status(200).json(invoices)
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

module.exports = router