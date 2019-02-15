const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  createChallenge,
  createMatch,
  createUser,
  getChallengeClient,
  getChallenges,
  createTablesIfNotExists
} = require('./controllers');

app.use(bodyParser.json());
app.use(cors());

app.get('/', createMatch);

app.get('/api/createuser', createUser);
app.get('/api/createchallenge', createChallenge);
app.get('/api/getchallenges', getChallenges);
app.get('/api/getchallenge', getChallengeClient);
app.get('/api/creatematch', createMatch);

// Routes
// [x] createuser
// [x] createchallenge
// [x] getchallengeclient
// [x] getchallenges
// [x] creatematch

app.listen(8002, () => {
  console.log(`API server listening on port 8002`);
});
