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
exports.ToDoService = void 0;
const toDo_model_1 = __importDefault(require("../models/toDo.model"));
class ToDoService {
    constructor() {
        this.toDoModel = toDo_model_1.default;
    }
    /* async getAllUserToDos(id: string) {
         const toDos = await this.toDoModel.find({user: id});
         return toDos;
     }*/
    getToDoById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const toDo = yield this.toDoModel.findById(id);
            return toDo;
        });
    }
    createToDo(id, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const toDo = yield this.toDoModel.create({
                user: id,
                text
            });
            return toDo;
        });
    }
    updateToDo(id, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedToDo = yield this.toDoModel.findByIdAndUpdate(id, { text }, { new: true });
            return updatedToDo;
        });
    }
    deleteToDo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedToDo = yield this.toDoModel.findByIdAndDelete(id);
            return deletedToDo;
        });
    }
}
exports.ToDoService = ToDoService;
