import express from "express";
const taskManagerRouter = express.Router();

// controllers
import { getTaskById, createTask, deleteTask, getAllTasks, updateTask } from "../controllers/index";

taskManagerRouter.route('').get(getAllTasks);
taskManagerRouter.route('/create').post(createTask);
taskManagerRouter.route('/:id').get(getTaskById);
taskManagerRouter.route('/update/:id').patch(updateTask);
taskManagerRouter.route('/delete/:id').delete(deleteTask);

export { taskManagerRouter }