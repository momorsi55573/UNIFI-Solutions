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
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = require("./config/index");
const routes_1 = require("./routes");
class AppServer {
    constructor() {
        this.app = (0, express_1.default)();
    }
    config() {
        this.logs();
        this.bodyParser();
        this.routes();
        this.errorHandling();
    }
    static start() {
        const appServer = new AppServer();
        appServer.connectDb();
        appServer.config();
        const server = http_1.default.createServer(appServer.app);
        server.listen(index_1.serverConfig.server.port, () => {
            console.log('server started');
        });
    }
    connectDb() {
        mongoose_1.default.connect(index_1.serverConfig.mongo.url)
            .then(() => { console.log('db connected'); })
            .catch((error) => { console.log(error); });
    }
    bodyParser() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    routes() {
        this.app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.status(200).send('<H1>HELLO WOLRD</H1>');
        }));
        this.app.use('/toDo', routes_1.toDoController.getRouter());
    }
    logs() {
        this.app.use((req, res, next) => {
            console.log('REQUEST IS: ', req.path, new Date().toLocaleString());
            next();
        });
    }
    errorHandling() {
        this.app.use((req, res, next) => {
            const error = new Error('not found');
            console.log(error);
            return res.status(404).send(error.message);
        });
    }
}
AppServer.start();
