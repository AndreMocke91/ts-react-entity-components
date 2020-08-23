export enum PokemonType {
  FIRE = "fire",
  WATER = "water",
  GRASS = "grass",
}

export enum PokemonTypeColor {
  'fire' = 'red',
  'grass' = 'green',
  'water' = 'blue',
}

export class Pokemon {
  name: string;
  type: PokemonType;
  attack: number;
  defense: number;
  description?: string;
}
