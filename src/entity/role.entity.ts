/** @format */

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Org } from "./org.entity";

@Entity({ name: "roles" })
export class Role {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@ManyToOne(() => Org, (org) => org.roles)
	org: Org;

	@Column({ nullable: false })
	name: string; // Example roles: Admin, Member, etc.
}
