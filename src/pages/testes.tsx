import type { NextPage } from "next";
import { Header } from "../layout/Header";
import { TestesMenu } from './../templates/TestesMenu/index';


const Testes: NextPage = () => {
  return (
    <>
      <Header />
      <TestesMenu />
    </>
  );
};

export default Testes;
