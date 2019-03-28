/* eslint-disable */
const express = require('express');
const request = require('request');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(cookieParser());
app.set('port',  4000);

const setOptions = (uri, method, headers, json) => ({
  uri,
  method,
  headers: {
    ...headers,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  json,
}); 

const apiUrl = 'https://anilist.co/api/v2/';

app.get('/api/set-token', (req, res) => {
  const parsed = req.query;
  const params = setOptions(`${apiUrl}/oauth/token`, 'POST', {
    'grant_type': 'authorization_code',
    'client_id': '1725',
    'client_secret': '6iW8dnnx0cdZ8ub4HJz0ZBU5cm9fZbdqgFPHjhSy',
    'redirect_uri': 'http://localhost:3000',
    'code': parsed.code,
  });

  request(params, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.send({ token: body.access_token, expire: body.expires_in + Date.now() });
    }
  });
});

app.get('/api/get-user', (req, res) => {
  const params = setOptions(
    'https://graphql.anilist.co/getUser',
    'POST',
    { 'Authorization': 'Bearer ' + req.query.access_token },
    {}
  );
  request(params, (error, response, body) => {
    console.log(params);
    res.send(body, response);
  });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
