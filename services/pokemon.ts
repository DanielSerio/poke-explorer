import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {
  Pokemon,
  PokemonEncounter,
  PokemonNamesResults,
  PokemonTypeData,
  PokemonTypesResults,
  VersionsResults,
  VersionDetails,
  GenerationResults,
  GenerationClearDetails,
} from './types';


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2/'}),
  endpoints: (builder) => ({
    getAllPokemonNames: builder.query<PokemonNamesResults, string>({
      query: () => `pokemon?limit=100000&offset=0`,
    }),
    getGenerationDetails:
      builder.query<GenerationClearDetails, string>({
        query: (index) => `generation/${index}`,
        transformResponse(response: GenerationResults) {
          return {
            species: response.pokemon_species,
            types: response.types,
            region: response.main_region,
          };
        },
      }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getEncounters: builder.query<PokemonEncounter[], string>({
      query: (index) => `pokemon/${index}/encounters`,
    }),
    getAllTypes: builder.query<PokemonTypesResults, string>({
      query: () => `type?limit=100&offset=0`,
    }),
    getTypeDetails: builder.query<PokemonTypeData, string>({
      query: (name) => `type/${name}`,
    }),
    getAllVersions: builder.query<VersionsResults, string>({
      query: () => `version?offset=0&limit=1000`,
    }),
    getVersionDetails: builder.query<VersionDetails, string>({
      query: (name) => `version/${name}`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetAllPokemonNamesQuery,
  useGetEncountersQuery,
  useGetAllTypesQuery,
  useGetTypeDetailsQuery,
  useGetVersionDetailsQuery,
  useGetAllVersionsQuery,
  useGetGenerationDetailsQuery,
} = pokemonApi;
