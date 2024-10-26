import initKnex from "knex";
import configuration from "../knexfile.js";
//import { body, validationResult } from "express-validator";
//import utils from "../utils/utils.js";
const knex = initKnex(configuration);

//GET all inventory types
const getAllInventoryII = async (req, res) => {
    try {
        const data = await knex("inventory-ii");
        res.status(200).json(data);
    } catch(err) {
        res.status(400).send(`Error retrieving inventory: ${err}`);
    }
};

//GET one inventory type
const getOneProductType = async (req, res) => {
    try {
        const productsFound = await knex("inventory-ii")
            .where("inventory-ii.id", req.params.id);
        if (productsFound.length === 0) {
            return res.status(404).json({
                message: `Product ${req.params.id} not found`
            });
        }
        const productData = productsFound[0];
        res.status(200).json(productData);
    } catch(err) {
        res.status(500).json({
            message: `Unable to retrieve product data for ${re.params.id}`
        });
    }
};

export {
    getAllInventoryII,
    getOneProductType
};

// DONE