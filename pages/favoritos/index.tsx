import { Card, Grid } from "@nextui-org/react";
import { NextPage } from "next";
import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavoritePokemons, NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

export const FavoritosPage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons}/>
      )}
    </Layout>
  );
};

export default FavoritosPage;
