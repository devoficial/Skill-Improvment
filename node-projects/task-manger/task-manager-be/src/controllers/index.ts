// route - get all tasks - GET /tasks
export const getAllTasks = (req, res, next) => {  
    res.send('get all tasks');
 };
// route - get task by id - GET /tasks/:id
export const getTaskById = (req, res, next) => {
    res.send('get task by id');
};
// route - create task - POST /tasks/create
export const createTask = (req, res, next) => {
    res.json(req.body);
};
// route - update task - PATCH /tasks/update/:id
export const updateTask = (req, res, next) => {
    res.json(req.body);
};
// route - delete task - DELETE /tasks/update/:id
export const deleteTask = (req, res, next) => {
    res.send('delete task');
}