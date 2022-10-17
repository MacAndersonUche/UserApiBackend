import AWS from "aws-sdk";
import { User } from "../types";
AWS.config.update({ region: "us-east-1" });
const dynamo = new AWS.DynamoDB.DocumentClient();

export const getAllUsers = async () => {
    const params = {
        TableName: "users",
    };
    try {
        const data = await dynamo.scan(params).promise();
        console.log(data.Items);
        return data.Items as User[];
    } catch (err) {
        console.log(err);
    }
};