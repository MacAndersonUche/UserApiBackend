import AWS from "aws-sdk";
import { User } from "../types";
AWS.config.update({ region: "us-east-1" });
const dynamo = new AWS.DynamoDB.DocumentClient();


export const getSingleUser = async (id: string) => {
    const params = {
        TableName: "users",
        ExpressionAttributeValues: {
            ":id": id,
        },
        KeyConditionExpression: "id = :id",
    }

    try {
        const data = await dynamo.query(params).promise();
        if (data.Items) {
            console.log(data.Items[0]);
            return data.Items[0] as User;
        }
    } catch (err) {
        console.log(err);
    }


    
}