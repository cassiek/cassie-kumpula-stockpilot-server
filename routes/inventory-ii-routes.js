import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);
import express from "express";
const router = express.Router();

router.get("/", async (_req, res) => {
    try {
        const data = await knex("inventory-ii");
        res.status(200).json(data);
    } catch(err) {
        res.status(400).send(`Error retrieving inventory-ii: ${err}`);
    }
});

export default router;