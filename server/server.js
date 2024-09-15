require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema.js');
const colors = require('colors');
const connectDB = require('./config/db-connection.js');

const app = express();
connectDB();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true, 
}));

const PORT=process.env.PORT || 4000;
app.listen(4000, () => {
  console.log('Server running on port 4000');
}); 