import AWS from "aws-sdk";
import { User } from "../types";
AWS.config.update({ region: "us-east-1" });
const dynamo = new AWS.DynamoDB.DocumentClient();

export const createUsers = async ({id, name, age}: User) => {
	const params = {
		TableName: "users",
		Item: {
			id, name, age
		},
	};
	try {
		const data = await dynamo.put(params).promise();
		console.log(data);
	} catch (err) {
		console.log(err);
	}
};
