"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filesystem_1 = require("../../filesystem");
function updateUsersById(id, name, age) {
    var dataToReturn;
    var data = (0, filesystem_1.read)("src/database/db.json");
    var users = JSON.parse(data);
    var foundUser = users.find(function (user) { return user.id === id; });
    var usersFiltered = users.filter(function (user) { return user.id !== id; });
    var newUser = {
        id: id,
        name: name,
        age: age
    };
    if (foundUser) {
        usersFiltered.push(newUser);
        (0, filesystem_1.write)("src/database/db.json", usersFiltered);
        return dataToReturn = true;
    }
    return dataToReturn = false;
}
exports.default = updateUsersById;
