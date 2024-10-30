import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();
import * as inventoryIController from "../controllers/inventory-i-controller.js";

router.route("/").get(inventoryIController.getAllInventoryI);

router.route("/:id").get(inventoryIController.getOneItem);

router.route("/:id").delete(inventoryIController.deleteItem);
 
router.route("/:id").put(inventoryIController.editItem);

// still need create

export default router;