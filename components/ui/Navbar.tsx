import { useTheme, Text, Spacer, Link } from "@nextui-org/react";

import Image from "next/image";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Link href="/">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="icono de la aplicacion"
          width={70}
          height={70}
        />

        <Text color="white" h2>
          P
        </Text>

        <Text color="white" h3>
          okemon
        </Text>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href="/favoritos">
        <Text color="white">Favoritos</Text>
      </Link>

    </div>
  );
};
