import {
	getAllUsers,
	createUser,
	getUsersById,
	deleteUsersById,
	updateUsersById,
} from "./utils";
import serverless from 'serverless-http';
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

const app = express();

const router = express.Router();


router.get("/users", (req, res) => {
	res.send(getAllUsers());
});
router.post("/users", (req, res) => {
	const { name, age } = req.body;
	res.send(createUser(name, age));
});
router.put("/users", (req, res) => {
	const { id, name, age } = req.body;
	res.send(updateUsersById(id, name, age));
});
router.delete("/users/:id", (req, res) => {
	const { id } = req.params;
	res.send(deleteUsersById(id));
});
router.get("/users/:id", (req, res) => {
	const { id } = req.params;
	res.send(getUsersById(id));
});

app.use(cors());
app.use('/.netlify/functions/app', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

export { app };
export const handler = serverless(app);
