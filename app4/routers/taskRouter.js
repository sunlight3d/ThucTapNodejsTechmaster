/*
send GET request:

curl http://localhost:3000/tasks?nameContain='make'
curl http://localhost:3000/tasks?name=Hoang&age=30

curl http://localhost:3000/tasks/12345

taskByListId
curl http://localhost:3000/tasks/list/45678


send POST request:
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"id":"45678","name":"Make router with Express", "listId":"12345"}' \
  http://localhost:3000/tasks


send PUT request:
curl  --request PUT \
      -H "Content-Type: application/json" \
      -d '{"id":"45678","name":"Make router with Express"}' \
      http://localhost:3000/tasks

send DELETE request:
curl  --request DELETE \
      -H "Content-Type: application/json" \
      -d '{"id":"45678"}' \
      http://localhost:3000/tasks
*/

import { app } from '../app';

export const taskRouter = app.route('/tasks');
export const taskByIdRouter = app.route('/tasks/:taskId');
export const taskByListIdRouter = app.route('/tasks/list/:listId');

taskByIdRouter.get((req, res) => {
  res.json({
    result: "success",
    method: "GET",
    description: `You send1 ${JSON.stringify(req.query)}, taskId: ${JSON.stringify(req.query)}`
  });
});

taskByListIdRouter.get((req, res) => {
  res.json({
    result: "success",
    method: "GET",
    description: `You send ${JSON.stringify(req.query)}, listId: ${JSON.stringify(req.params)}`
  });
});

taskRouter.get((req, res) => {
  res.json({
    result: "success",
    method: "GET",
    description: `You send2 ${JSON.stringify(req.query)}`      
  });
});

taskRouter.post((req, res) => {
   res.json({
    result: "success",
    method: "POST",
    description: `You send ${JSON.stringify(req.body)}`      
  });
});

taskRouter.put((req, res) => {
    res.json({
    result: "success",
    method: "PUT",
    description: `You send ${JSON.stringify(req.body)}`      
  });
});

taskRouter.delete((req, res) => {
    res.json({
    result: "success",
    method: "DELETE",
    description: `You send ${JSON.stringify(req.body)}`      
  });
});


export default {
  taskRouter,
  taskByIdRouter,
  taskByListIdRouter
}
