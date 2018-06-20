/*
npm install express --save
npm install body-parser --save

tblList
tblTask
1 List has many Tasks

*/
import { app } from './app';
import { PORT } from './constants';
import { listRouter } from './routers/listRouter';
import taskRouter from './routers/taskRouter';

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
