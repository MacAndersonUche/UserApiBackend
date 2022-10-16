"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../../database/db");
function getAllUsers() {
    // let dataToReturn: User[];
    // const data =  read("src/database/db.json");
    // return dataToReturn = JSON.parse(data);
    return db_1.usersArray;
}
exports.default = getAllUsers;
