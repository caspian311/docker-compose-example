let axios = require('axios');

export function loadMessage() {
  return axios.get('/api/messages').then(response => {
    return response['data'][0].message;
  });
}
