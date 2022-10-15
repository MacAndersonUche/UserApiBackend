"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_gateway_event_json_1 = __importDefault(require("../src/api-gateway-event.json"));
const lambdaFunction = __importStar(require("../src/lambda"));
const context = {};
const callback = (_e, _v) => { };
const server = lambdaFunction.handler(api_gateway_event_json_1.default, context, callback);
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield server;
        // print and exit
        console.log(response);
        process.exit(0);
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
}))();
process.stdin.resume();
function exitHandler(options, err) {
    console.log("exitHandler: ", options, err);
    // @ts-ignore
    if (options.cleanup && server && server.close) {
        // @ts-ignore
        server.close();
    }
    if (err) {
        console.error(err.stack);
    }
    if (options.exit)
        process.exit();
}
process.on("exit", exitHandler.bind(null, { cleanup: true }));
process.on("SIGINT", exitHandler.bind(null, { exit: true })); // ctrl+c event
process.on("SIGTSTP", exitHandler.bind(null, { exit: true })); // ctrl+v event
process.on("uncaughtException", exitHandler.bind(null, { exit: true }));
