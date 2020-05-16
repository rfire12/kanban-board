// eslint-disable-next-line import/no-extraneous-dependencies
const { serverHotReload } = require('universal-hot-reload');

serverHotReload(require.resolve('./server.js'));
