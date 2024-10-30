import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();
import * as warehouseController from "../controllers/warehouse-controller.js";


router.route("/").get(warehouseController.getAllWarehouses);

router.route("/:id").get(warehouseController.getOneWarehouse);

router.route("/:id").delete(warehouseController.deleteWarehouse);

router.route("/:id/inventory").get(warehouseController.allInventory);

router.route("/:id/products").get(warehouseController.productTypes);

router.route("/:id/inventory").put(warehouseController.editWarehouse);

// still need create

// will i need "/:id/products", "/:id/inventory" ?????

export default router;