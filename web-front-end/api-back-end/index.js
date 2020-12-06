'use strict';

const app = require('./app');
const { findingXYZ, findingBC } = require('./controller/DOSCG')

const PORT = process.env.PORT || 9000;

app.get('/api/xyz', findingXYZ)

app.get('/api/bc', findingBC)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});