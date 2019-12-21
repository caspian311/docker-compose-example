let axios = require('axios');

export function loadCharacters() {
  return axios.get('/api/characters').then(response => {
    return response['data'].map((character) => {
      return {
        name: character["name"],
        description: character["description"],
        image: `https://swgoh.gg${character["image"]}`,
        categories: character["categories"].map((c) => { return c.name; }).join(", ")
      };
    });
  });
}
