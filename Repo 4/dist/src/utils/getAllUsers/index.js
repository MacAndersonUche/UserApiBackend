"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filesystem_1 = require("../../filesystem");
function getAllUsers() {
    var dataToReturn;
    var data = (0, filesystem_1.read)("src/database/db.json");
    return dataToReturn = JSON.parse(data);
}
exports.default = getAllUsers;
