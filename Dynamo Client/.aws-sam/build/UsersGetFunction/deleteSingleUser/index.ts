import AWS from "aws-sdk";
import { User } from "../types";
AWS.config.update({ region: "us-east-1" });
const dynamo = new AWS.DynamoDB.DocumentClient();

export const deleteSingleUser = async (id: string) => {
    const params = {
        TableName: "users",
        Key: {
            id: {"S": id},
        },
    };
    try {
        const data = await dynamo.delete(params).promise();
        console.log(data);
        return true
    } catch (err) {
        console.log(err);
        return false
    }
}