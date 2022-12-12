import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router } from "./routers/car.routes";
import { connectdb } from "./config/database";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(router);
connectdb()
app.listen(PORT, () => {
    console.log(`en la ruta ${PORT}`);
});