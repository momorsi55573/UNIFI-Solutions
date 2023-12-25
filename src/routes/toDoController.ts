import { ToDoService } from './../service/ToDoService';
import express, {NextFunction, Request, Response} from "express";
import { User } from "src/utils/interfaces";


export class toDoController {
    router: express.Router;
    user: User;
    ToDoService: ToDoService;
    constructor() {
        this.router = express.Router();
        this.user = {id: '123'};
        this.ToDoService = new ToDoService();
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
        this.router.post('/add', async (req: Request, res: Response) => {
           const addToDo = await this.ToDoService.createToDo(this.user.id, req.body.text)
            return res.status(200).send(addToDo);
        })
    }
    updateToDo() {
        this.router.put('/update/:id', async (req: Request, res: Response) => {
           const updateToDo = await this.ToDoService.updateToDo(req.params.id, req.body.text)
            return res.status(200).send(updateToDo);
        })
    }
    deleteToDo() {
        this.router.delete('/delete/:id', async (req: Request, res: Response) => {
           const deleteToDo = await this.ToDoService.deleteToDo(req.params.id)
            return res.status(200).send(deleteToDo);
        })
    }
    getToDoById() {
        this.router.get('/getToDoById/:id', async (req: Request, res: Response) => {
           const getToDoById = await this.ToDoService.getToDoById(req.params.id)
            return res.status(200).send(getToDoById);
        })
    }
 /*   getAllUserToDos() {
        this.router.get('/getAllUserToDos', async (req: Request, res: Response) => {
           const getAllUserToDos = await this.ToDoService.getAllUserToDos(this.user.id)
            return res.status(200).send(getAllUserToDos);
        })
    }*/
 }