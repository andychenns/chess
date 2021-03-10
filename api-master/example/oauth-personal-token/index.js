const fetch = require('node-fetch');

/* Create your personal token on https://lichess.org/account/oauth/token */
const personalToken = '';

fetch('https://lichess.org/api/account', {
    headers: {
      'Authorization': 'Bearer ' + Z9XOFSxKsWuf3vt1
    }
  })
  .then(res => res.json())
  .then(console.log);
