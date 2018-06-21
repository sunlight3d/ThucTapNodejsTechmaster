/*
send GET request:

curl http://localhost:3000/list?nameContain='make'

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

export const listRouter = app.route('/lists');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });  

listRouter.get((req, res) => {
  res.json({
    result: "success",
    method: "GET",
    description: `You send ${JSON.stringify(req.query)}`      
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

