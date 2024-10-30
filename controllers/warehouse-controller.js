import initKnex from "knex";
import configuration from "../knexfile.js";
//import { body, validationResult } from "express-validator";
//import utils from "../utils/utils.js";
const knex = initKnex(configuration);

//GET all warehouses
const getAllWarehouses = async (req, res) => {
    try {
        const data = await knex("warehouses");
        res.status(200).json(data);
    } catch(err) {
        res.status(400).send(`Error retrieving warehouses: ${err}`);
    }
};

//GET single warehouse
const getOneWarehouse = async (req, res) => {
    try {
        const warehousesFound = await knex("warehouses")
            .where("warehouses.id", req.params.id);
        if (warehousesFound.length === 0) {
            return res.status(404).json({
                message: `Item with ID ${req.params.id} not found`
            });
        }
        const warehouseData = warehousesFound[0];
        res.status(200).json(warehouseData);
    } catch(err) {
        res.status(500).json({
            message: `Unable to retrieve warehouse data for ${re.params.id}`
        });
    }
};

//Validation middleware ???

//PUT single warehouse
const editWarehouse = async (req, res) => {
    try {
      const rowsUpdated = await knex("warehouses")
        .where({ id: req.params.id })
        .update(req.body);
  
      if (rowsUpdated === 0) {
        return res.status(404).json({ 
            message: "Warehouse not found" 
        });
      }
  
      const updatedWarehouse = await knex("warehouses")
        .where({
            id: req.params.id
        });
  
      res.json(updatedWarehouse[0]);
    } catch(error) {
        res.status(500).json({ 
            message: `Unable to update warehouse with ID ${req.params.id}: ${error}` 
        });
    }
};

//POST a new warehouse


//DELETE warehouse and associated inventory items, inventory types (if eliminated...)
const deleteWarehouse = async (req, res) => {
    try {
      const rowsDeleted = await knex("warehouses")
        .where({ id: req.params.id })
        .delete();
      if (rowsDeleted === 0) {
        return res
          .status(404)
          .json({ message: `Warehouse with ID ${req.params.id} not found` });
      }
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({
        message: `Unable to delete warehouse: ${error}`
      });
    }
};

//GET all inventory for a given warehouse
const allInventory = async (req, res) => {
    try {
      const inventory = await knex("warehouses")
        .join("inventory-i", "inventory-i.warehouse_id", "warehouses.id")
        .where({ warehouse_id: req.params.id });
      res.json(inventory);
    } catch (error) {
      res.status(500).json({
        message: `Unable to retrieve inventory for warehouse with ID ${req.params.id}: ${error}`,
      });
    }
};

//GET all product types for a given warehouse
const productTypes = async (req, res) => {
    try {
        const inventory = await knex("warehouses")
            .join("inventory-i", "inventory-i.warehouse_id", "warehouses.id")
            .where({ warehouse_id: req.params.id });
            let products = [];
            for (let i = 0; i < inventory.length; i++) {
                if (!products.includes(inventory[i].name)) {
                    products.push(inventory[i].name);
                }
            }
        res.json(products);
    } catch (error) {
      res.status(500).json({
        message: `Unable to retrieve inventory for warehouse with ID ${req.params.id}: ${error}`,
      });
    }
};

export {
    getAllWarehouses,
    getOneWarehouse,
    editWarehouse,
    deleteWarehouse,
    allInventory,
    productTypes
};