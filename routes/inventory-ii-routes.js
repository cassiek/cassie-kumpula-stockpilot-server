import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();
import * as inventoryIIController from "../controllers/inventory-ii-controller.js";

router.route("/").get(inventoryIIController.getAllInventoryII);

router.route("/:id").get(inventoryIIController.getOneProductType);

// DONE

export default router;