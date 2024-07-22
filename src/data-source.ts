/** @format */

import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/user.entity";

require("dotenv").config();

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
PGPASSWORD = decodeURIComponent(PGPASSWORD);

export const AppDataSource = new DataSource({
	type: "postgres",
	host: PGHOST,
	port: 5432,
	username: PGUSER,
	password: PGPASSWORD,
	database: PGDATABASE,
	synchronize: true,
	logging: false,
	entities: [User],
	migrations: [],
	subscribers: [],
	useUTC: true,
	ssl: true,
});
