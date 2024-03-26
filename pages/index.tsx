import { NextPage, GetStaticProps } from "next";

import { Grid } from "@nextui-org/react";

import { pokeApi } from "../api";

import { PokemonListResponse, smallPokemon } from "../interfaces";

import { Layout } from "../components/layouts";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: smallPokemon[];
}

export const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pok) => (
          <PokemonCard key={pok.id} pokemon={pok} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resp = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  const pokemons: smallPokemon[] = resp.data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  // console.log(resp.data.results);

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
