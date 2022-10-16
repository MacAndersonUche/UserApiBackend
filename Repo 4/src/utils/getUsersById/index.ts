import { usersArray } from "../../database/db";
import { read } from "../../filesystem";
import { User } from "../../types";

export default function getUsersById(id: string) {
	let dataToReturn: User;
	// const data = read("src/database/db.json");
	// const users: User[] = JSON.parse(data);
	// const user = users.find((user) => user.id === id);
	const user = usersArray.find((user) => user.id === id);
	if (user) {
		dataToReturn = user;
		return dataToReturn;
	}

    return false
}
