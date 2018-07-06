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
import { sequelize, Op } from '../sequelize';
import { SUCCESS, FAILED } from '../constants';
import { Validator } from 'node-input-validator';

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
  const { listId } = req.query; 
  List.findOne({
    attributes: ["id",
                "name",
                "priority",
                "description",
                "duedate"],
    where: {
      id: listId
    }
  }).then(foundList => {
    if (foundList) {
      res.json({
          result: SUCCESS,
          data: foundList,
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

//app.route('/lists/nameLike').get((req, res) => {
app.route('/lists/:nameLike').get((req, res) => {
  // req.query
  const { nameLike } = req.params; 
  console.log(`nameLike = ${nameLike}`);
  // Project.findAll({ offset: 5, limit: 5 }); //skip first 5, get next 5
  List.findAll({
    attributes: ["id",
                "name",
                "priority",
                "description",
                "duedate"],
    where: {
      name: {
        // [Op.like]: `%${nameLike}%`,
        [Op.iLike]: `%${nameLike}%`
      }
    }
  }).then(foundList => {
    if (foundList) {
      res.json({
          result: SUCCESS,
          data: foundList,
          description: `query List successfully`      
        });    
    } else {
      res.json({
          result: FAILED,
          data: "",
          description: `Cannot find list with nameLike=${nameLike}`
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

listRouter.post(async (req, res) => {
  let v = new Validator({
                    list: req.body
                },
                {
                    'list': 'required|object',                    
                    'list.name': 'required',
                    'list.priority': 'required|integer',
                    'list.description': 'required|integer'
                    'list.duedate': 'required|integer'
                });
 
  let matched = await v.check();
  
  const { name,priority,description,duedate } = req.body;    
  List.create({name,
    priority: parseInt(priority),
    // priority: priority,
    description,duedate}, {fields:["name","priority","description","duedate"]})
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
        description: `Create new List failed. Error = ${err}`      
      });
    });  
});

listRouter.put((req, res) => {
  const { listId } = req.body; 
  List.findOne({    
    where: {
      id: listId
    }
  }).then(foundList => {
    foundList.name = req.body.name?req.body.name:foundList.name;
    foundList.priority = req.body.priority?req.body.priority:foundList.priority;
    foundList.description = req.body.description?req.body.description:foundList.description;
    foundList.duedate = req.body.duedate?req.body.duedate:foundList.duedate;
    foundList.save().then(() => {
      res.json({
          result: SUCCESS,
          data: foundList,
          description: `Update List successfully with listId=${listId}`      
        });
      }).catch(err => {
        res.json({
          result: FAILED,
          data: "",
          description: `Update List failed with listId=${listId}.Error = ${JSON.stringify(err)}`      
        });
    });
  }).catch(err => {
    res.json({
        result: FAILED,
        data: "",
        description: `Cannot find list to update. ListId=${listId}.Error = ${JSON.stringify(err)}`
      });
  });  
});

listRouter.delete((req, res) => {
  const { listId } = req.body; 
  deleteListById(listId, res);
});

async function deleteListById(listId, res) {  
  try {
    await List.destroy({
      where: {
        id: listId
      }
    });
    let foundList = await List.findOne({
      where: {
        id: listId
      }
    });
    if (!foundList) {
      res.json({
        result: SUCCESS,
        data: {},
        description: `Delete List successfully with Id=${listId}`
      });        
    } else {
      res.json({
        result: FAILED,
        data: {},
        description: `Delete List failed with Id=${listId}`
      });        
    }
  } catch(err){
    res.json({
      result: FAILED,
      data: {},
      description: `Delete List failed with Id=${listId}. Error = ${err}`
    });
  }  
}