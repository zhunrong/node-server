"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controller_authorize_1 = require("../controller/controller.authorize");
var router = express_1.default.Router();
router.post('/login', controller_authorize_1.login);
router.post('/register', controller_authorize_1.register);
exports.default = router;