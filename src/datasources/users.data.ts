import { User } from "../interfaces/user.interface";
import { roles } from "./roles.data";
import { v4 as uuid } from 'uuid';

// Dataset Users
export const users: User[] = [
	{
		id: uuid(),
		name: "John Doe",
		email: "john@gmail.com",
		roles: [roles[0], roles[1]],
	},
	{
		id: uuid(),
		name: "Mariana",
		email: "mariana@gmail.com",
		roles: [roles[1]],
	},
	{ id: uuid(), 
    name: "Alice", 
    email: "alice@gmail.com", 
    roles: [roles[1], roles[2]], 
  },
	{ id: uuid(), name: "Alexis", email: "alexis@gmail.com" },
];


