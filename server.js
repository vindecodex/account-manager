const dotenv = require('dotenv').config({path: './.env'});
const mongoose = require('mongoose');
const app = require('./app');

// DB connection
const DB = process.env.DATABASE;
mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})
.then(() => console.log('Database Connection Succeed!'))
.catch(err => console.log(err));

// PORT
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
