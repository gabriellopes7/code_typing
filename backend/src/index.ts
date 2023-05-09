import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

// function getUserName() {
//     return 'gabriellopes7';
// }

// const username = getUserName();

app.use(cors());

app.use(routes);


app.listen(3333);