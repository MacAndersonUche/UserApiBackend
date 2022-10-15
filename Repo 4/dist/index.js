"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./src/utils");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var port = 5000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get("/users", function (req, res) {
    res.send((0, utils_1.getAllUsers)());
});
app.post("/users", function (req, res) {
    var _a = req.body, name = _a.name, age = _a.age;
    res.send((0, utils_1.createUser)(name, age));
});
app.put("/users", function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name, age = _a.age;
    res.send((0, utils_1.updateUsersById)(id, name, age));
});
app.delete("/users/:id", function (req, res) {
    var id = req.params.id;
    res.send((0, utils_1.deleteUsersById)(id));
});
app.get("/users/:id", function (req, res) {
    var id = req.params.id;
    res.send((0, utils_1.getUsersById)(id));
});
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
