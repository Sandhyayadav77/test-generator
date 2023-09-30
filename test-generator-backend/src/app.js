const express = require('express');
const app = express();
const mongoogse = require('./config/database')
const port = process.env.PORT || 3000;

// Import and use the centralized routes from the 'routes' directory
const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
