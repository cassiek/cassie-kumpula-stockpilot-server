import initKnex from "knex";
import configuration from "../knexfile.js";
//import { body, validationResult } from "express-validator";
//import utils from "../utils/utils.js";
const knex = initKnex(configuration);

//GET all inventory from inventory-i
const getAllInventoryI = async (req, res) => {
    try {
        const data = await knex("inventory-i");
        res.status(200).json(data);
    } catch(err) {
        res.status(400).send(`Error retrieving inventory: ${err}`);
    }
};

//GET one item from inventoy-i with warehouse name(?)
const getOneItem = async (req, res) => {
    try {
        const itemsFound = await knex("inventory-i")
            .where("inventory-i.id", req.params.id);
        if (itemsFound.length === 0) {
            return res.status(404).json({
                message: `Item with ID ${req.params.id} not found`
            });
        }
        const itemData = itemsFound[0];
        res.status(200).json(itemData);
    } catch(err) {
        res.status(500).json({
            message: `Unable to retrieve item data for ${re.params.id}`
        });
    }
};

//Validation middleware???

//PUT(edit) single inventory item
const editItem = async (req, res) => {
    try {
      const rowsUpdated = await knex("inventory-i")
        .where({ id: req.params.id })
        .update(req.body);
      if (rowsUpdated === 0) {
        return res.status(404).json({ 
            message: `Item with ID ${req.params.id} not found` 
        });
      }
      const updatedItem = await knex("inventory-i")
        .where({
            id: req.params.id
        });
      res.status(200).json(updatedItem);
    } catch(error) {
        res.status(500).json({ 
            message: `Unable to update item with ID ${req.params.id}: ${error}` 
        });
    }
};

//POST(create) a new inventory item
// need form data

//DELETE single inventory item, associated inventory type (if eliminated)
const deleteItem = async (req, res) => {
    try {
        const rowsDeleted = await knex("inventory-i")
            .where({ id: req.params.id }).delete();
        if (rowsDeleted === 0) {
            return res
                .status(404)
                .json({ message: `Item with ID ${req.params.id} not found` })
        }
        res.sendStatus(204);
    } catch(err) {
        res.status(500).json({
            message: `Unable to delete item: ${err}`
        });
    }
};

export {
    getAllInventoryI,
    editItem,
    getOneItem,
    deleteItem
};