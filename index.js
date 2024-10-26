import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 5050;

import warehouseRoutes from "./routes/warehouse-routes.js";
import inventoryIRoutes from "./routes/inventory-i-routes.js";
import inventoryIIRoutes from "./routes/inventory-ii-routes.js";

app.use("/warehouses", warehouseRoutes);
app.use("/inventory-i", inventoryIRoutes);
app.use("/inventory-ii", inventoryIIRoutes);
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});