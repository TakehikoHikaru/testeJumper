import PokeCard from "./PokeCard"
import { Box, TextField, Button } from "@mui/material"
import { useState } from "react"

export default function PokeTela(){

    const [text, setText] = useState();
    const [pokemons, setPokemons] = useState([]);

    async function buscaPokemon(pokeName) { 
        console.log(pokeName)
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/geodude")
        let body = await response.json()
        console.log(body)
        let pokemon = {
            "name": body.name,
            "id": body.id,
            "weight": body.weight,
            "types": body.types,
            "sprite": body.sprites.other["official-artwork"].front_shiny
        }
        console.log(pokemon)
        setPokemons([pokemon, ...pokemons])
        console.log(pokemons)
    }

    return(
        <Box>
            <TextField onChange={(v) => {
                console.log(v.target.value)
                setText(v.target.value)
            }}></TextField>
            <Button onClick={(v) => {
                buscaPokemon(text)
            }}>Ok</Button>

            {
                pokemons.map( (pokemon) => {
                    return (<PokeCard name={pokemon.name} img={pokemon.sprite}></PokeCard>)
                })
            }
            
        </Box>
    )
}