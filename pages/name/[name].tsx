import { NextPage, GetStaticProps,GetStaticPaths } from "next";

import { Layout } from "../../components/layouts";

interface Props {
  pokemon:Pokemon
}

export const PokemonNamePages: NextPage<Props> = ({pokemon}) => {
  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              
            </Card.Header>

            <Card.Body>
              <Text transform="capitalize">{pokemon.name} Sprites:</Text>

              <Container display="flex" direction="row">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { pokeApi } from "../../api";
import { Pokemon } from '../../interfaces/pokemon-full';
import { PokemonListResponse } from '../../interfaces/pokemon-list';
import { Card, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const {data} = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`)

  const pokemonNames: string[] = data.results.map(pokemon => pokemon.name)

  return {
    paths: pokemonNames.map(name => ({params: {name}})),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const {name} = params as {name:string}

  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${name}`)

  return {
    props: {
      pokemon:data
    },
  };
};

export default PokemonNamePages;
