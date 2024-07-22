/** @format */

import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { payload } from "../dto/user.dto";

dotenv.config();
const { JWT_SECRET = "" } = process.env;
export class encrypt {
	static async encryptpass(password: string) {
		const salt = await bcrypt.genSalt(12);
		return [bcrypt.hashSync(password, salt), salt];
	}
	static comparepassword(hashPassword: string, password: string) {
		return bcrypt.compareSync(password, hashPassword);
	}

	static comparepasswordWithSalt(Object: { password: string; salt: string }) {
		return bcrypt.hashSync(Object.password, Object.salt);
	}

	static generateToken(payload: payload) {
		return jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
	}
}
