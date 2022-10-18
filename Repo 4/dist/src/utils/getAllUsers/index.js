"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../../database/db");
var aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.region = 'eu-west-1';
var lambda = new aws_sdk_1.default.Lambda();
function getAllUsers() {
    // let dataToReturn: User[];
    // const data =  read("src/database/db.json");
    // return dataToReturn = JSON.parse(data);
    return db_1.usersArray;
}
exports.default = getAllUsers;
