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
import { SUCCESS, FAILED } from '../constants';

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

import { Task } from '../models/Task';
import { List } from '../models/List';

listRouter.get((req, res) => {
  // req.query
  List.findAll({
    attributes: ["id",
                "name",
                "priority",
                "description",
                "duedate"]
  }).then(lists => {
        res.json({
          result: SUCCESS,
          data: lists,
          description: `query List successfully`      
        });    
  }).catch(err => {
    res.json({
        result: FAILED,
        data: "",
        description: `Query List failed. Error = ${JSON.stringify(err)}`      
    });    
  });  
});

app.route('/listById').get((req, res) => {
  // req.query
  const { listId } = req.query.listId; 
  List.findOne({
    attributes: ["id",
                "name",
                "priority",
                "description",
                "duedate"],
    where: {
      id: req.query.listId
    }
  }).then(foundedList => {
    if (foundedList) {
      res.json({
          result: SUCCESS,
          data: foundedList,
          description: `query List successfully with listId=${listId}`      
        });    
    } else {
      res.json({
          result: FAILED,
          data: "",
          description: `Cannot find list with listId=${listId}`
        });    
    }
  }).catch(err => {
    res.json({
        result: FAILED,
        data: "",
        description: `Query List failed. Error = ${JSON.stringify(err)}`      
    });    
  });  
});

listRouter.post((req, res) => {
  const { name,priority,description,duedate } = req.body;
  List.create({name,priority,description,duedate})
    .then(newList => {
      res.json({
        result: SUCCESS,
        data: newList,
        description: `Create new List successfully`      
      });
    }).catch(err => {
      res.json({
        result: FAILED,
        data: "",
        description: `Create new failed`      
      });
    });  
});

listRouter.put((req, res) => {
  const { listId } = req.body; 
  List.findOne({    
    where: {
      id: listId
    }
  }).then(foundedList => {
    foundedList.name = req.body.name?req.body.name:foundedList.name;
    foundedList.priority = req.body.priority?req.body.priority:foundedList.priority;
    foundedList.description = req.body.description?req.body.description:foundedList.description;
    foundedList.duedate = req.body.duedate?req.body.duedate:foundedList.duedate;
    foundedList.save().then(() => {
      res.json({
          result: SUCCESS,
          data: foundedList,
          description: `Update List successfully with listId=${listId}`      
        });
      }).catch(err => {
        res.json({
          result: FAILED,
          data: "",
          description: `Update List failed with listId=${listId}`      
        });
    });
  }).catch(err => {
    res.json({
        result: FAILED,
        data: "",
        description: `Cannot update List failed with listId=${listId}`      
      });
  });  
});

listRouter.delete((req, res) => {
    res.json({
    result: SUCCESS,
    method: "DELETE",
    description: `You send ${JSON.stringify(req.body)}`      
  });
});

