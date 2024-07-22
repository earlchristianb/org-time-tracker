/** @format */

import { AppDataSource } from "./data-source";
import * as express from "express";
import userRouter from "./controllers/user.controller";
import bodyParser = require("body-parser");

AppDataSource.initialize()
	.then(async () => {
		// console.log("Inserting a new user into the database...");
		// const user = new User();
		// user.email = "1st@maildrop.cc";
		// user.name = "Sawlly";a

		// await AppDataSource.manager.save(user);
		// console.log("Saved a new user with id: " + user.id);

		// console.log("Loading users from the database...");
		// const users = await AppDataSource.manager.find(User);
		// console.log("Loaded users: ", users);

		const app = express();
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));
		app.use(bodyParser.json());
		app.use("/user", userRouter);

		app.get("/", (req, res) => {
			res.send("Your application is running");
		});

		app.listen(3000);

		console.log(
			"Here you can setup and run express / fastify / any other framework."
		);
	})
	.catch((error) => console.log(error));
