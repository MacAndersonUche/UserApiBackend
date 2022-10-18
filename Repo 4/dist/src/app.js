"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.app = void 0;
var utils_1 = require("./utils");
var serverless_http_1 = __importDefault(require("serverless-http"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
exports.app = app;
var router = express_1.default.Router();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use("/.netlify/functions/app", router); // path must route to lambda
router.get("/", function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Up and running</h1>");
    res.end();
});
router.get("/users", function (req, res) {
    res.send((0, utils_1.getAllUsers)());
});
router.post("/users", function (req, res) {
    var _a = req.body, name = _a.name, age = _a.age;
    res.send((0, utils_1.createUser)(name, age));
});
router.put("/users", function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name, age = _a.age;
    res.send((0, utils_1.updateUsersById)(id, name, age));
});
router.delete("/users/:id", function (req, res) {
    var id = req.params.id;
    res.send((0, utils_1.deleteUsersById)(id));
});
router.get("/users/:id", function (req, res) {
    var id = req.params.id;
    res.send((0, utils_1.getUsersById)(id));
});
exports.handler = (0, serverless_http_1.default)(app);
