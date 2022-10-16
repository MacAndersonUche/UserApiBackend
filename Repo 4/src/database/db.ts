import { User } from "../types";

 let usersArray = [
	{ id: "5da179cd-0fb3-4112-aa09-d03c8786a7d1", name: "Andy", age: 25 },
	{
		id: "eca526d2-eb5d-4e23-8b38-5e271e87d989",
		name: "Macky",
		age: 25,
	},
	{ id: "88736698-0052-4dc5-b4ae-bec8a7e8a5db", name: "Macky", age: 25 },
];

function setUsersArray(users: User[]) {
	usersArray = users;
}


export {usersArray, setUsersArray };