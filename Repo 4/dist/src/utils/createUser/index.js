"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filesystem_1 = require("../../filesystem");
var uuid_1 = require("uuid");
function createUser(name, age) {
    var data = (0, filesystem_1.read)("src/database/db.json");
    var users = JSON.parse(data);
    var newUser = {
        id: (0, uuid_1.v4)(),
        name: name,
        age: age
    };
    users.push(newUser);
    (0, filesystem_1.write)("src/database/db.json", users);
    return users;
}
exports.default = createUser;
