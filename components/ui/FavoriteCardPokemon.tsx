import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";

interface Props {
  pokemonID: number;
}

export const FavoriteCardPokemon: NextPage<Props> = ({ pokemonID }) => {
  return (
    <Grid key={pokemonID} xs={6} sm={3} md={2} xl={1}>
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg`}
          width={"100%"}
          height={140}
        />
      </Card>
    </Grid>
  );
};
