"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_user_1 = __importDefault(require("../model/model.user"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
/**
 * 登录
 * @param req
 * @param res
 */
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, results, user, maxAge, token, _b, message;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.body, username = _a.username, password = _a.password;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, model_user_1.default.get({ username: username })];
                case 2:
                    results = (_c.sent()).results;
                    user = results[0];
                    if (!user) {
                        throw new Error('用户不存在');
                    }
                    if (user.password !== password) {
                        throw new Error('密码不正确');
                    }
                    maxAge = config_1.default.TOKEN_MAX_AGE;
                    token = jsonwebtoken_1.default.sign({
                        uid: user.id,
                        exp: Math.floor(Date.now() / 1000) + maxAge
                    }, config_1.default.TOKEN_SECRET);
                    res.send({
                        status: 'success',
                        user: user,
                        authorization: {
                            token: token,
                            maxAge: maxAge
                        }
                    });
                    return [3 /*break*/, 4];
                case 3:
                    _b = _c.sent();
                    message = _b.message;
                    res.send({
                        message: message,
                        status: 'error'
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
/**
 * 注册
 * @param req
 * @param res
 */
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, password, results, user, _b, message;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = req.body, username = _a.username, password = _a.password;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, model_user_1.default.get({ username: username })];
                case 2:
                    results = (_c.sent()).results;
                    user = results[0];
                    if (user) {
                        throw new Error('用户已存在');
                    }
                    // 添加新用户
                    return [4 /*yield*/, model_user_1.default.post({
                            username: username,
                            password: password
                        })];
                case 3:
                    // 添加新用户
                    _c.sent();
                    login(req, res);
                    return [3 /*break*/, 5];
                case 4:
                    _b = _c.sent();
                    message = _b.message;
                    res.send({
                        message: message,
                        status: 'error'
                    });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
