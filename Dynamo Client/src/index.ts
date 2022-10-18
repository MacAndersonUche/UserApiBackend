import { createUsers } from "./createUsers";
import { deleteSingleUser } from "./deleteSingleUser";
import { getAllUsers } from "./getAllUsers";
import { getSingleUser } from "./getSingleUser";
import { updateSingleUser } from "./updateSingleUser";


// getSingleUser("1");
// deleteSingleUser("2");
// createUsers({ id: "2", name: "John", age: 20 });
// getAllUsers();

// updateSingleUser("1", "Johnnny", 220);



export const lambdaHandler = async ()=> {
    const users = await getAllUsers();
    return users
}