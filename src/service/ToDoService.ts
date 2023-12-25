import { ToDo } from 'src/utils/interfaces';
import ToDoModel from '../models/toDo.model';
export class ToDoService {
    private toDoModel; // Replace 'any' with the actual type of ToDoModel

    constructor() {
        this.toDoModel = ToDoModel;
    }
    async getAllUserToDos(id: string) {
        const toDos = await this.toDoModel.find({user: id});
        return toDos;
    }
    async getToDoById(id: string) {
        const toDo = await this.toDoModel.findById(id);
        return toDo;
    }
    async createToDo(id: string, text: string): Promise<ToDo> {
        const toDo = await this.toDoModel.create({
            user:id,
            text
        });
        return toDo;
    }
   async updateToDo(id: string, text: string) {
        const updatedToDo = await this.toDoModel.findByIdAndUpdate(id, {text}, {new: true});
        return updatedToDo;
    }
   async deleteToDo(id: string) {
        const deletedToDo = await this.toDoModel.findByIdAndDelete(id);
        return deletedToDo;
    }
}