"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./src/app");
var port = 5000;
app_1.app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
