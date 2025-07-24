import express from "express";
import notesRouter from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

// const express = require("express");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// middleware
app.use(express.json());

app.use("/api/notes/", notesRouter);

// app.get("/api/notes", (req, res) => {
// 	res.status(200).send("Im a get eeeeeeeee");
// });
// app.get("/api/msg", (req, res) => {
// 	res.status(200).json({ message: "Message" });
// });

app.listen(PORT, () => {
	console.log("Server started on PORT: ", PORT);
});
