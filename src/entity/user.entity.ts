/** @format */

import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	JoinColumn,
	OneToOne,
	ManyToOne,
	OneToMany,
} from "typeorm";
import { Org } from "./org.entity";
import { UserRoles } from "./user-roles.entity";

@Entity({ name: "users" })
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ nullable: false })
	name: string;

	@Column({ nullable: false })
	email: string;

	@Column({ nullable: false })
	password: string;

	@Column({ default: "user" })
	role: string;

	@ManyToOne(() => Org, (org) => org.users)
	@JoinColumn()
	org: Org;

	@OneToMany(() => UserRoles, (userRoles) => userRoles.user)
	userRoles: UserRoles[];

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
