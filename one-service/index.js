const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');
const basicAuth = require('./auth/basic.auth');

app.use(express.json());
app.use(basicAuth);
routes(app);
app.listen(port, function() {
   console.log('Server started on port: ' + port);
});