"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../../database/db");
function getUsersById(id) {
    var dataToReturn;
    // const data = read("src/database/db.json");
    // const users: User[] = JSON.parse(data);
    // const user = users.find((user) => user.id === id);
    var user = db_1.usersArray.find(function (user) { return user.id === id; });
    if (user) {
        dataToReturn = user;
        return dataToReturn;
    }
    return false;
}
exports.default = getUsersById;
