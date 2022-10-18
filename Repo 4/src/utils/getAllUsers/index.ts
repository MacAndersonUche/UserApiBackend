import { usersArray } from "../../database/db";
import userGenerator from "../../database/db1";
// import { read } from "../../filesystem";
import { User } from "../../types";

export default function getAllUsers(): User[] {
    // let dataToReturn: User[];
    // const data =  read("src/database/db.json");
	// return dataToReturn = JSON.parse(data);
    return usersArray;
}
