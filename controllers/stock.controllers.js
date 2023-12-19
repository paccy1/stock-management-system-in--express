const stockModel = require('../models/stock.models');
const create = async (req, res, next) => { 
    try {
        const newItem = new stockModel(req.body);
        const savedItems = await newItem.save();
        
        console.log(savedItems);

        res.status(201).json({
            message: 'Stock created',
            stock: savedItems
        })
    } catch (error) {
        res.status(500).send("Failed to save!!");
    }
}

const list = async (req, res, next) => { 
    try {
        var stock = await stockModel.find({});
        res.status(200).json({ employees });
    } catch (error) {
        res.status(500).send("Error fetching stock equippemnt!!");
    }
}

const update = async (req, res, next) => { 
    
}

const remove = async (req, res, next) => { 
    
}

const findById = async (req, res, next) => { 
    
}


module.exports = {
    create, update, remove, findById, list
}