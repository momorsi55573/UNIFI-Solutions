import mongoose, { Schema } from 'mongoose';
import { ToDo } from 'src/utils/interfaces';



// Schema
const schema = new Schema<ToDo>({
  user: { type: String, required: true },
  text: { type: String, required: true },
});

export default mongoose.model<ToDo>('ToDoModel', schema);