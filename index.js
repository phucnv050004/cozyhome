import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./src/routes/index.js";
import connectMongoDB from "./src/config/dbconfig.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URI || "mongodb+srv://phucvan050004:10102004@cluster0.krr5d5d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
connectMongoDB(dbUrl);

app.use("/", router);

app.listen(port, () => console.log("Server is running with " + port));