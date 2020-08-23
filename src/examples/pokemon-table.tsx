import * as React from "react";
import { Pokemon, PokemonType, PokemonTypeColor } from "../entities/pokemon";
import { EntityTable, CustomColumn } from "../table/entity-table";

const pokemon: Pokemon[] = [
  {
    name: 'charmander',
    attack: 100,
    defense: 50,
    type: PokemonType.FIRE,
    description: 'A very energetic and unpredictable pokemon.'
  },
  {
    name: 'bulbasaur',
    attack: 80,
    defense: 100,
    type: PokemonType.GRASS,
    description: 'A sluggish pokemon.'
  }
]

const renderPokemonType: React.SFC<Pokemon> = (props) => {
  return (
    <div style={{
      background: PokemonTypeColor[props.type],
      color: 'white'
    }}>
      {props.type}
    </div>
  )
}

const pokemonTypeColumn: CustomColumn<Pokemon> = {
  heading: 'type',
  renderCell: renderPokemonType
}

class PokemonTable extends EntityTable<Pokemon> {}

export const renderPokemonTableExample: React.SFC<{isLoaded: boolean}> = (props) => (
  <PokemonTable
    rows={pokemon}
    columns={['name', 'attack', 'defense', pokemonTypeColumn]}
    isLoaded={props.isLoaded}
  />
)