import { read, write } from "../../filesystem";
import { User } from "../../types";

export default function updateUsersById(id: string, name: string, age: number): boolean {
    let dataToReturn: boolean;
    const data =  read("src/database/db.json");
    const users: User[] = JSON.parse(data);
    const foundUser = users.find((user) => user.id === id);
    const usersFiltered = users.filter((user) => user.id !== id);
    const newUser: User = {
        id: id,
        name: name,
        age: age
    }
    if(foundUser) {
    usersFiltered.push(newUser);
    write("src/database/db.json", usersFiltered);
    return dataToReturn = true;
    }
    return dataToReturn = false;
}