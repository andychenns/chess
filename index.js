const fetch = require('node-fetch');

/* Create your personal token on https://lichess.org/account/oauth/token */
const personalToken = 'Z9XOFSxKsWuf3vt1';

fetch('https://lichess.org/api/account', {
    headers: {
      'Authorization': 'Bearer ' + personalToken
    }
  })
  .then(res => res.json())
  .then(console.log);
