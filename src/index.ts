/** @format */
import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
	const name = req.query.name;
	res.status(200).send(`Hello ${name || "World"}`);
});

app.listen(3000, () => {
	console.log(`Server is running on port ${PORT}`);
});
