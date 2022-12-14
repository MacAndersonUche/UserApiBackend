import { read, write } from "../../filesystem";
import { User } from "../../types";
import { v4 as uuidv4 } from 'uuid';
import {usersArray} from "../../database/db";


export default function createUser( name: string, age: number): User[] {
    // const data =  read("src/database/db.json");
    // const users: User[] = JSON.parse(data);
    // const users: User[] = usersArray;
    const newUser: User = {
        id: uuidv4(),
        name: name,
        age: age
    }
    usersArray.push(newUser);
    // write("src/database/db.json", users);
    return usersArray;
}