'use strict';

const app = require('./app');
const { findingXYZ } = require('./controller/DOSCG')

const PORT = process.env.PORT || 9000;

app.get('/api/xyz', findingXYZ)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});