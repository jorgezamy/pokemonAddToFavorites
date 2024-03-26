import Head from "next/head";
import { PropsWithChildren } from "react";
import { Navbar } from "../ui/";

interface Props {
  title?: string;
}

export const Layout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="Author" content="Jorge Zamora" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main>{children}</main>
    </>
  );
};
