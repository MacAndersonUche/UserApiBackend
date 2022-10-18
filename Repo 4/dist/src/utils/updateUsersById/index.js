"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../../database/db");
function updateUsersById(id, name, age) {
    var dataToReturn;
    // const data =  read("src/database/db.json");
    // const users: User[] = JSON.parse(data);
    // const foundUser = users.find((user) => user.id === id);
    // const usersFiltered = users.filter((user) => user.id !== id);
    var foundUser = db_1.usersArray.find(function (user) { return user.id === id; });
    var usersFiltered = db_1.usersArray.filter(function (user) { return user.id !== id; });
    var newUser = {
        id: id,
        name: name,
        age: age
    };
    if (foundUser) {
        usersFiltered.push(newUser);
        // write("src/database/db.json", usersFiltered);
        (0, db_1.setUsersArray)(usersFiltered);
        return dataToReturn = true;
    }
    return dataToReturn = false;
}
exports.default = updateUsersById;
