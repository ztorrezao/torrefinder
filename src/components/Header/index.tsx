import React from 'react';
import { HeaderContainer, Navigation } from './styles';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import { IoBriefcase, IoPeople } from "react-icons/io5";
import logo from '../../assets/logo.svg';

function Header() {
  setConfiguration({ containerWidths: [540, 740, 960, 1186, 1540] });
  return (
    <HeaderContainer>
      <Container>
        <Row align='center' justify='between' className='header-row'>
          <img src={logo} className='logo' alt='Torrefinder' />

          <Navigation>
            <a className="active" href='#'><IoBriefcase className="icon" size={18} /> Job search</a>
            <a href='#'><IoPeople size={18}  className="icon" /> People search</a>
          </Navigation>
        </Row>
      </Container>
    </HeaderContainer>
  );
}

export default Header;
