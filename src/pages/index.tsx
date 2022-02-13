import type { NextPage } from "next";
import Head from "next/head";
import { Home } from "../templates/Home";

const App: NextPage = () => {
  return (
    <>
      <Head>
        <title>Qautomatizado - Evento</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Home />
      </body>
    </>
  );
};

export default App;
