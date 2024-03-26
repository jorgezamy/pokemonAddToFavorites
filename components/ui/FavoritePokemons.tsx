import { Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
  pokemons: number[];
}

export const FavoritePokemons: NextPage<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons.map((id) => (
        <FavoriteCardPokemon pokemonID={id} key={id} />
      ))}
    </Grid.Container>
  );
};
