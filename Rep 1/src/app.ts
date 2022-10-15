import {
	getAllUsers,
	createUser,
	getUsersById,
	deleteUsersById,
	updateUsersById,
} from "./utils";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const port = 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/users", (req, res) => {
	res.send(getAllUsers());
});
app.post("/users", (req, res) => {
	const { name, age } = req.body;
	res.send(createUser(name, age));
});
app.put("/users", (req, res) => {
	const { id, name, age } = req.body;
	res.send(updateUsersById(id, name, age));
});
app.delete("/users/:id", (req, res) => {
	const { id } = req.params;
	res.send(deleteUsersById(id));
});
app.get("/users/:id", (req, res) => {
	const { id } = req.params;
	res.send(getUsersById(id));
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});


export { app };