import { Role } from "../interfaces/role.interface";
import { v4 as uuid } from 'uuid';

// Dataset Roles
export const roles: Role[] = [
	{ id: uuid(), name: "Admin" },
	{ id: uuid(), name: "User" },
	{ id: uuid(), name: "Dev" },
];


