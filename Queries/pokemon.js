const db = require('../db/dbConfig');

//INDEX
const getAllPokemon = async () => {
  try {
    const allPokemon = await db.any('SELECT * FROM pokemon');
    return allPokemon;
  } catch (error) {
    return error;
  }
};

const createPokemon = async (pokemon) => {
    const { name, image, type} = pokemon

    try {
      const allPokemon = await db.any('INSERT INTO pokemon (name, image, type) VALUES ($1, $2, $3) RETURNING *', [name, image, type]);
      return allPokemon;
    } catch (error) {
      return error;
    }
  };

const updatePokemon = async (pokemon, id) => {
    const { name, image, type } = pokemon
    console.log(id)
    try {
        const updatePokemon = await db.one(
        'UPDATE pokemon SET name=$1, image=$2, type=$3 WHERE id=$4 RETURNING *',
        [name, image, type, id]
        )
        return updatePokemon;
    } catch (error) {
        return error;
    }
};

module.exports = {
    getAllPokemon,
    createPokemon,
    updatePokemon
}