import { read, write } from "../../filesystem";
import { User } from "../../types";
import { setUsersArray, usersArray } from "../../database/db";

export default function deleteUsersById(id: string): boolean {
	let dataToReturn: boolean;
	// const data =  read("src/database/db.json");
	// const users: User[] = JSON.parse(data);
	// const foundUser = users.find((user) => user.id === id);
	// const usersFiltered = users.filter((user) => user.id !== id);
	const foundUser = usersArray.find((user) => user.id === id);
	const usersFiltered = usersArray.filter((user) => user.id !== id);

	if (foundUser) {
		// write("src/database/db.json", usersFiltered);
		setUsersArray(usersFiltered);
		return (dataToReturn = true);
	}
	return (dataToReturn = false);
}
