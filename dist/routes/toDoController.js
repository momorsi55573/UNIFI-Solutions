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
exports.toDoController = void 0;
const ToDoService_1 = require("./../service/ToDoService");
const express_1 = __importDefault(require("express"));
class toDoController {
    constructor() {
        this.router = express_1.default.Router();
        this.user = { id: '123' };
        this.ToDoService = new ToDoService_1.ToDoService();
    }
    static getRouter() {
        const instance = new toDoController();
        return instance.config();
    }
    config() {
        this.addToDo();
        this.updateToDo();
        this.deleteToDo();
        this.getToDoById();
        // this.getAllUserToDos();
        return this.router;
    }
    addToDo() {
        this.router.post('/add', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const addToDo = yield this.ToDoService.createToDo(this.user.id, req.body.text);
            return res.status(200).send(addToDo);
        }));
    }
    updateToDo() {
        this.router.put('/update/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const updateToDo = yield this.ToDoService.updateToDo(req.params.id, req.body.text);
            return res.status(200).send(updateToDo);
        }));
    }
    deleteToDo() {
        this.router.delete('/delete/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const deleteToDo = yield this.ToDoService.deleteToDo(req.params.id);
            return res.status(200).send(deleteToDo);
        }));
    }
    getToDoById() {
        this.router.get('/getToDoById/:id', (req, res) => __awaiter(this, void 0, void 0, function* () {
            const getToDoById = yield this.ToDoService.getToDoById(req.params.id);
            return res.status(200).send(getToDoById);
        }));
    }
}
exports.toDoController = toDoController;
