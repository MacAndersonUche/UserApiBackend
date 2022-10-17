import { getAllUsers } from "./getAllUsers";



export const handler = async ()=> {
    const users = await getAllUsers();
    return {
        statusCode: 200,
        body: JSON.stringify({
            users
        })
    }
}