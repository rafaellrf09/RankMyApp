const axios = require('axios');

class RickController {

  async index(req, res) {
    try {
      const { data: { results } } = await axios.get('https://rickandmortyapi.com/api/character/');

      const response = results.map(({ id, name, status, location }) => 
        ({
          id,
          name,
          status,
          location: location.name
        })
      );

      return res.json(response);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error"});
    }
  }

  async findAlive(req, res) {
    try {
      const { data: { results } } = await axios.get('https://rickandmortyapi.com/api/character/');

      const response = results.map(({ id, name, status, location }) => 
        ({
            id,
            name,
            status,
            location: location.name  
        })
      ).filter(filterCharacter => filterCharacter.status === 'Alive')

      return res.json(response);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal server error"});
    }
  }

  

}

module.exports = new RickController;