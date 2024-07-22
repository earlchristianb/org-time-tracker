/** @format */

import { Request, Response } from "express";
import { CreateUserDto } from "../dto/user.dto";
import { encrypt } from "../helpers";
import { separator } from "../lib/constants";
import { UserRepository } from "../repository/user.repository";

export const getUsers = async (req: Request, res: Response) => {
	const users = await UserRepository.find();
	return res.status(200).json({ users });
};

export const createUser = async (req: Request, res: Response) => {
	const { email, password, name } = req.body as CreateUserDto;

	if (!email || !password) {
		return res.status(400).json({ message: "Email and password are required" });
	}

	if (password.length < 8) {
		return res
			.status(400)
			.json({ message: "Password must be at least 8 characters" });
	}

	if (name && name.length < 2) {
		return res
			.status(400)
			.json({ message: "Name must be at least 2 characters" });
	}

	let [encryptedPass, salt] = await encrypt.encryptpass(password);

	console.log("EncryptedPass:", encryptedPass);
	console.log("Salt: ", salt);

	const enforcedPassword = encryptedPass + separator + salt;

	console.log("Enforced Password: ", enforcedPassword);

	const newCreatedUser = await UserRepository.createUser({
		email,
		password: enforcedPassword,
		name,
	});
	return res.status(201).json({ newCreatedUser });
};
