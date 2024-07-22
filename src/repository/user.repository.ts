/** @format */

import { AppDataSource } from "../data-source";
import { CreateUserDto } from "../dto/user.dto";
import { User } from "../entity/user.entity";

class UserRepository {
	private static userRepository = AppDataSource.getRepository(User);

	static async findOne(id: string): Promise<User | null> {
		const user = await this.userRepository.findOneBy({ id });
		return user;
	}

	static async find(): Promise<User[]> {
		const users = await this.userRepository.find();
		return users;
	}

	static async createUser(user: CreateUserDto): Promise<User> {
		const newUser = this.userRepository.create(user);
		await this.userRepository.save(newUser);
		return newUser;
	}
}

export { UserRepository };
