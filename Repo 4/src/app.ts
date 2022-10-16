import {
	getAllUsers,
	createUser,
	getUsersById,
	deleteUsersById,
	updateUsersById,
} from "./utils";
import serverless from "serverless-http";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const router = express.Router();

app.use(cors());
app.use("/.netlify/functions/app", router); // path must route to lambda
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.get("/", (req, res) => {
	res.writeHead(200, { "Content-Type": "text/html" });
	res.write("<h1>Up and running</h1>");
	res.end();
});
router.get("/users", (req, res) => {
	res.send(getAllUsers());
});
router.post("/users", (req, res) => {
	const { name, age } = req.body;
	res.send(createUser(name, age));
});
router.post("/test", (req, res) => {
	const { name, age } = req.body;
	res.send({ name, age });
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
router.get("/test/:id", (req, res) => {
	const { id } = req.params;
	res.send({ id });
});

export { app };
export const handler = serverless(app);
