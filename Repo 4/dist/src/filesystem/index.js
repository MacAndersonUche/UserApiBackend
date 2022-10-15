"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.write = exports.read = void 0;
var fs_1 = __importDefault(require("fs"));
function read(path) {
    var data = fs_1.default.readFileSync(path, "utf8");
    return data;
}
exports.read = read;
function write(path, data) {
    var str = JSON.stringify(data);
    fs_1.default.writeFile(path, str, function (err) {
        if (err)
            throw err;
        console.log("Saved!");
        return true;
    });
}
exports.write = write;
