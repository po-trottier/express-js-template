'use strict';

const app = require('./express/server');

const port = 5000;

app.listen(port, () => console.log(`API listening on port ${port}...`));
