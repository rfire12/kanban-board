
const React = require('react');

const express = require('express');
const { StaticRouter } = require('react-router-dom');
const ReactDOMServer = require('react-dom/server');
const bodyParser = require('body-parser');
const App = require('../src/components/App');

const app = express();

app.use(bodyParser.json());
app.use(express.static('dist'));

app.get('*', (request, response) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <StaticRouter location={request.url} context={context}>
      <App />
    </StaticRouter>,
  );

  const html = `
  <html lang="en">
    <head>
    </head>
    <body>
      ${content}
    </body>
  </html>
  `;

  response.send('This is my working app');
});

app.listen(8080, () => {
  console.log(`App launched on 8080`);
});
