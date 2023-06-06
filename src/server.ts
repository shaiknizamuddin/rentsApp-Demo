import express, {Express, Request, Response} from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import db from './util/db';

const app: Express = express();
const port = 3000;
db.connect().then(suc => {console.log('success, suc', suc)}).catch(err => console.log(err));

// Express configuration
app.set('port', process.env.PORT || 8060);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get('/', (req: Request, res: Response)=>{
//     res.send('Hello, this is Express + TypeScript');
// });



export default app;