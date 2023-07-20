const express = require('express')
const app = express();
require('dotenv').config();
const { getAllPokemon, createPokemon, updatePokemon } = require('./Queries/pokemon')
const PORT = process.env.APP_PORT;
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.get('/pokemon', async (req, res) => {
    const allPokemon = await getAllPokemon()

    if(allPokemon){
        res.status(200).send(allPokemon)
    } else {
        res.status(404).send('Error')
    }
})

app.post('/pokemon/new', async (req, res) => {
    const pokemon = req.body
    const newPokemon = await createPokemon(pokemon)

    if(newPokemon){
        res.status(200).send(newPokemon)
    } else {
        res.status(404).send('Error')
    }
})

app.put('/pokemon/update/:id', async (req, res) => {
    const pokemon = req.body
    const { id } = req.params
    const updatedPokemon = await updatePokemon(pokemon, id)

    if(updatedPokemon){
        res.status(200).send(updatedPokemon)
    } else {
        res.status(404).send('Error')
    }
})

app.listen(PORT, () => {
    console.log('Server is running ' + PORT)
})