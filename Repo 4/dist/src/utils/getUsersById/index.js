"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filesystem_1 = require("../../filesystem");
function getUsersById(id) {
    var dataToReturn;
    var data = (0, filesystem_1.read)("src/database/db.json");
    var users = JSON.parse(data);
    var user = users.find(function (user) { return user.id === id; });
    if (user) {
        dataToReturn = user;
        return dataToReturn;
    }
    return false;
}
exports.default = getUsersById;
