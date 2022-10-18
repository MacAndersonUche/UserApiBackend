import { getAllUsers } from "./getAllUsers";



export const handler = async ()=> {
    const users = await getAllUsers();
    return users
}