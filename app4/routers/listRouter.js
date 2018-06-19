/*
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"id":"12345","name":"Make a Nodejs Project"}' \
  http://localhost:3000/list

curl http://localhost:3000/list?nameContain='make'

curl -X PUT \
      -H "Content-Type: application/json" \
      -d '{"id":"mkyong","name":"Make a ReactNative project"}' 
      http://localhost:3000/list

*/

import { app } from '../app';

export const listRouter = app.route('/list');

listRouter.get((req, res) => {
  res.json({
    result: "success",
    description: `You send ${JSON.stringify(req.query)}`      
  });
});

listRouter.post((req, res) => {
   res.send("You send a POST request");
});

listRouter.put((req, res) => {
    res.send('Update the book')
});
listRouter.delete((req, res) => {
    res.send('Update the book')
});

