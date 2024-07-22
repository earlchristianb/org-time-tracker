/** @format */

import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
} from "typeorm";

import { User } from "./user.entity";
import { Role } from "./role.entity";

@Entity({ name: "organizations" })
export class Org {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ nullable: false })
	name: string;

	@Column({ nullable: false })
	owner: string;

	@OneToMany(() => User, (user) => user.org)
	users: User[];

	@OneToMany(() => Role, (role) => role.org)
	roles: Role[];

	@Column()
	description: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
