import express, {NextFunction, Request, Response} from "express";
import http from "http";
import mongoose from "mongoose";
import { serverConfig } from './config/index';
import { toDoController } from "./routes";

class AppServer {
   app: express.Application;
   constructor() {
       this.app = express();
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
       const server = http.createServer(appServer.app);
       server.listen(serverConfig.server.port, ()=>{
        console.log('server started')
       });
   }
   private connectDb(){
     mongoose.connect(serverConfig.mongo.url)
    .then(()=>{console.log('db connected')})
    .catch((error)=>{console.log(error)});
   }
   private bodyParser() {
       this.app.use(express.json());
       this.app.use(express.urlencoded({extended: true}));
   }
   private routes() {
       this.app.get('/', async (req: Request, res: Response) => {
           res.status(200).send('<H1>HELLO WOLRD</H1>');
       });
       this.app.use('/toDo', toDoController.getRouter());
       
   }
   private logs() {
       this.app.use((req: Request, res: Response, next: NextFunction) => {
           console.log('REQUEST IS: ', req.path, new Date().toLocaleString());
           next();
       })
   }
   private errorHandling() {
    this.app.use((req: Request, res: Response, next: NextFunction) => {
        const error = new Error('not found');
        console.log(error);
        return res.status(404).send(error.message)
    });
   }
}


AppServer.start();