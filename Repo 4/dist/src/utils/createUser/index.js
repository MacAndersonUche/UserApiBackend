"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var db_1 = require("../../database/db");
function createUser(name, age) {
    // const data =  read("src/database/db.json");
    // const users: User[] = JSON.parse(data);
    var users = db_1.usersArray;
    var newUser = {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age
    };
    db_1.usersArray.push(newUser);
    // write("src/database/db.json", users);
    return users;
}
exports.default = createUser;
