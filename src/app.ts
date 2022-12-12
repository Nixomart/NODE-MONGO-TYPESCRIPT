import "dotenv/config";
import express from 'express';
import cors from 'cors';
import carRouter from "./routes/car.routes";
import authRouter from "./routes/auth.routes";
import { connectdb } from "./config/database";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(carRouter);
app.use(authRouter);
connectdb()
app.listen(PORT, () => {
    console.log(`en la ruta ${PORT}`);
});