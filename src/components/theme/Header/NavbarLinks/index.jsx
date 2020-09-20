import React, {useContext} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <AnchorLink href="#about">À propos</AnchorLink>
      <AnchorLink href="#projects">Projets</AnchorLink>
      <AnchorLink href="#contact">Me contacter</AnchorLink>
      <a href="https://blog.astrogoat.tk" >Blog</a>
      <ToggleTheme />
    </Wrapper>
  )

};

export default NavbarLinks;
