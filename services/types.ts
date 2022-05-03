export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: NamedItem[];
  game_indices: Gameindex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: NamedItem;
  sprites: Sprites;
  stats: Stat[];
  types: PokemonType[];
  weight: number;
}

export interface PokemonType {
  slot: number;
  type: NamedItem;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedItem;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
  other: Other;
  versions: Versions;
}

export interface Versions {
  'generation-i': Generationi;
  'generation-ii': Generationii;
  'generation-iii': Generationiii;
  'generation-iv': Generationiv;
  'generation-v': Generationv;
  'generation-vi': Generationvi;
  'generation-vii': Generationvii;
  'generation-viii': Generationviii;
}

export interface Generationviii {
  icons: Dreamworld;
}

export interface Generationvii {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

export interface Generationvi {
  'omegaruby-alphasapphire': Home;
  'x-y': Home;
}

export interface Generationv {
  'black-white': Blackwhite;
}

export interface Blackwhite {
  animated: Diamondpearl;
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generationiv {
  'diamond-pearl': Diamondpearl;
  'heartgold-soulsilver': Diamondpearl;
  platinum: Diamondpearl;
}

export interface Diamondpearl {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Generationiii {
  emerald: Emerald;
  'firered-leafgreen': Fireredleafgreen;
  'ruby-sapphire': Fireredleafgreen;
}

export interface Fireredleafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Emerald {
  front_default: string;
  front_shiny: string;
}

export interface Generationii {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface Generationi {
  'red-blue': Redblue;
  yellow: Redblue;
}

export interface Redblue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
}

export interface Officialartwork {
  front_default: string;
}

export interface Home {
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

export interface Dreamworld {
  front_default: string;
  front_female?: any;
}

export interface Move {
  move: NamedItem;
  version_group_details: Versiongroupdetail[];
}

export interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: NamedItem;
  version_group: NamedItem;
}

export interface Gameindex {
  game_index: number;
  version: NamedItem;
}

export interface Ability {
  ability: NamedItem;
  is_hidden: boolean;
  slot: number;
}

export interface NamedItem {
  name: string;
  url: string;
}


export interface PokemonEncounter {
  location_area: NamedItem;
  version_details: EncounterVersiondetail[];
}

export interface EncounterVersiondetail {
  encounter_details: Encounterdetail[];
  max_chance: number;
  version: NamedItem;
}

export interface Encounterdetail {
  chance: number;
  condition_values: NamedItem[];
  max_level: number;
  method: NamedItem;
  min_level: number;
}


export interface PokemonTypeData {
  damage_relations: Damagerelations;
  game_indices: TypeDataGameindex[];
  generation: NamedItem;
  id: number;
  move_damage_class: NamedItem;
  moves: NamedItem[];
  name: string;
  names: TypeName[];
  past_damage_relations: any[];
  pokemon: TypeDataPokemon[];
}

interface TypeDataPokemon {
  pokemon: NamedItem;
  slot: number;
}

interface TypeName {
  language: NamedItem;
  name: string;
}

interface TypeDataGameindex {
  game_index: number;
  generation: NamedItem;
}

interface Damagerelations {
  double_damage_from: NamedItem[];
  double_damage_to: any[];
  half_damage_from: any[];
  half_damage_to: NamedItem[];
  no_damage_from: NamedItem[];
  no_damage_to: NamedItem[];
}

export interface VersionDetails {
  id: number;
  name: string;
  names: VersionDetailsName[];
  version_group: NamedItem;
}

interface VersionDetailsName {
  language: NamedItem;
  name: string;
}

interface ApiResults<T=any> {
  previous?: string|null
  next?: string|null
  count: number
  results: T
}

export type VersionName = 'red'|'blue'|'yellow'|'gold'|'silver'|'crystal'|
'ruby'|'sapphire'|'emerald'|'firered'|'leafgreen'|'diamond'|'pearl'|'platinum'|
'heartgold'|'soulsilver'|'black'|'white'|'colosseum'|'xd'|'black-2'|'white-2'|
'x'|'y'|'omega-ruby'|'alpha-sapphire'|'sun'|'moon'|'ultra-sun'|'ultra-moon'|
'lets-go-pikachu'|'lets-go-eevee'|'sword'|'shield'
export type PokemonNamesResults = ApiResults<NamedItem[]>
export type PokemonTypesResults = ApiResults<NamedItem[]>
export type VersionsResults = ApiResults<NamedItem[]>
