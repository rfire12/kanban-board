import React from 'react';

import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import bodyParser from 'body-parser';

import path from 'path';
import fs from 'fs';
import App from '../src/components/App';

const app = express();

app.use(bodyParser.json());
app.use('/public', express.static('dist/public'));

app.get('/*', (request, response) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={request.url} context={context}>
      <App />
    </StaticRouter>,
  );

  const indexFile = path.resolve('./dist/public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return response.status(500).send('Oops, better luck next time!');
    }
    return response.send(data.replace('<div id="root"></div>', `<div id="root">${content}</div>`));
  });
});

app.listen(8080, () => {
  console.log(`App launched on 8080`);
});
