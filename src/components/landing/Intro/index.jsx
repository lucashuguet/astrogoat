import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>AstroGoat</h1>
          <h4>Développeur web et python!</h4>
          <Button as={AnchorLink} href="#contact">
            Me Contacter
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Je suis AstroGoat, un développeur web et python !" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
