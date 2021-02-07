import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import config from './config';

import * as ExpressTypes from './interfaces/express';

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routes

// default resposne
app.use('*', (
  req: ExpressTypes.Request,
  res: ExpressTypes.Response
) => res.status(404).json({}));

server.listen(config.PORT, () => {
  console.log(`listening at port: ${config.PORT}`);
});

server.listen(config.PORT);
