const express = require('express');
const path = require('path');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const {
  createChallenge,
  createMatch,
  createUser,
  getChallengeClient,
  getChallenges
  // createTablesIfNotExists
} = require('./controllers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/portal', (req, res) => {
  res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/api/createuser', createUser);
app.post('/api/createchallenge', createChallenge);
app.get('/api/getchallenges', getChallenges);
app.get('/api/getchallenge', getChallengeClient);
app.get('/api/creatematch', createMatch);

// Routes
// [x] createuser
// [x] createchallenge
// [x] getchallengeclient
// [x] getchallenges
// [x] creatematch

app.listen(process.env.PORT || 8002, () => {
  console.log(`API server listening on port`, process.env.PORT || 8002);
});
