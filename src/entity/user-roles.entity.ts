/** @format */

import { Entity, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./user.entity";
import { Role } from "./role.entity";
import { Org } from "./org.entity";

@Entity({ name: "user_roles" })
export class UserRoles {
	@ManyToOne(() => User, (user) => user.userRoles)
	@JoinColumn({ name: "user_id" })
	user: User;

	@ManyToOne(() => Role)
	@JoinColumn({ name: "role_id" })
	role: Role;

	@ManyToOne(() => Org)
	@JoinColumn({ name: "org_id" })
	org: Org;
}
