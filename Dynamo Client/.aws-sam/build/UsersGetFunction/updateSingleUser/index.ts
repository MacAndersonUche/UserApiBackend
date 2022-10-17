import AWS from "aws-sdk";
import { User } from "../types";
AWS.config.update({ region: "us-east-1" });
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

export const updateSingleUser = async (id: string, name: string, age: number) => {
    const params = {
        TableName: "users",
        Key: {
            "id": id,
            "name": name,
            "age": age,
        },
        UpdateExpression: "set #n = :name, #age = :age",
        ExpressionAttributeValues: {
            ":name": name,
            ":age": age,
        },
        ExpressionAttributeNames: {
            "#n": "name",
            "#age": "age",
        },
    };
    try {
        const data = await docClient.update(params).promise();
        console.log(data);
        return true
    } catch (err) {
        console.log(err);
        return false
    }
}