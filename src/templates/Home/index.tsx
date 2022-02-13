import React from "react";
import Particles from "react-tsparticles";

import { particlesOptions } from "./util/particlesOptions";
import cypressLogo from "./styles/assets/cypressLogo.png";
import qAutomatizado from "./styles/assets/qAutomatizado.jpg";

import { motion } from 'framer-motion';

import Image from "next/image";
import { Button } from "@mui/material";
import Link from "next/link";
import { translateY50 } from '../../animations';
import { useScroll } from "../../animations/useScroll";

import { ContentHeader, Container, ContentLogos, ContentMain, Subtitle, Title } from './styles/components'
export const Home = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <Particles id="tsparticles" options={particlesOptions} />
      <motion.div
        ref={element}
        variants={translateY50}
        initial={{ y: 0, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.1, type: 'spring', stiffness: 100 }}
      >
        <Container>
          <ContentHeader>
            <ContentLogos>
              <Image src={cypressLogo} alt="cypressLogo" width={90} height={90} />
              +
              <Image
                src={qAutomatizado}
                alt="qAutomatizado logo"
                width={70}
                height={70}
              />
            </ContentLogos>
            <Title>Testes de performance</Title>
            <Subtitle>
              Quer dar um Up em sua carreira e conhecer ainda mais sobre a
              ferramenta de Automação Web em Cypress? Então vamos iniciar os
              testes!
            </Subtitle>
          </ContentHeader>
          <ContentMain>
            <Link href="/testes" as="/testes">
              <a>
                <Button
                  data-testid='btn_inicio'
                  name="btn_inicio"
                  id='btn_inicio'
                  variant="contained"
                  color="secondary"
                  style={{ width: "100%" }}
                >
                  Iniciar agora
                </Button>
              </a>
            </Link>
          </ContentMain>
        </Container>
      </motion.div>
    </>
  );
};
