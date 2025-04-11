import express from "express";
import cors from "cors";
import UserRoute  from "./route/RouteNote.js";

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(port, () => {console.log("server up and running...")});
