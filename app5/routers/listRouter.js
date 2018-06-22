/*
send GET request:

curl http://localhost:3000/lists?nameContain='make'

send POST request:
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"id":"12345","name":"Make a Nodejs Project"}' \
  http://localhost:3000/lists


send PUT request:
curl  --request PUT \
      -H "Content-Type: application/json" \
      -d '{"id":"12345","name":"Make a ReactNative project"}' \
      http://localhost:3000/lists

send DELETE request:
curl  --request DELETE \
      -H "Content-Type: application/json" \
      -d '{"id":"12345"}' \
      http://localhost:3000/lists
*/

import { app } from '../app';
import { sequelize } from '../sequelize';
import { Task } from '../models/Task';
import { List } from '../models/List';

export const listRouter = app.route('/lists');

//Test DB connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });  

listRouter.get((req, res) => {
  // req.query
  List.findAll().then(lists => {
        res.json({
          result: "success",
          data: lists,
          description: `query List successfully`      
        });    
  }).catch(err => {
    res.json({
        result: "failed",
        data: "",
        description: `Query List failed. Error = ${JSON.stringify(err)}`      
    });    
  });  
});

listRouter.post((req, res) => {
   res.json({
    result: "success",
    method: "POST",
    description: `You send ${JSON.stringify(req.body)}`      
  });
});

listRouter.put((req, res) => {
    res.json({
    result: "success",
    method: "PUT",
    description: `You send ${JSON.stringify(req.body)}`      
  });
});

listRouter.delete((req, res) => {
    res.json({
    result: "success",
    method: "DELETE",
    description: `You send ${JSON.stringify(req.body)}`      
  });
});

