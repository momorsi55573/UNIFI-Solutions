"use strict";
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
exports.ProductControllers = void 0;
const express_1 = __importDefault(require("express"));
class ProductControllers {
    constructor() {
        this.router = express_1.default.Router();
    }
    static getRouter() {
        const instance = new ProductControllers();
        return instance.config();
    }
    config() {
        this.configGetProductsRoutesHandler();
        return this.router;
    }
    configGetProductsRoutesHandler() {
        this.router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.status(200).send([{
                    id: '23fd3er',
                    name: 'puma'
                }]);
        }));
    }
}
exports.ProductControllers = ProductControllers;
