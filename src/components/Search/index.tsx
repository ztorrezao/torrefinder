import React from 'react';
import { SearchContainer } from './styles';
import { Container, Row, Col, setConfiguration } from 'react-grid-system';
import { IoSearch } from 'react-icons/io5';
import logo from '../../assets/logo.svg';
import { colors } from '../../styles';


function Header(props: any) {
  setConfiguration({ containerWidths: [540, 740, 960, 1186, 1540] });
  const {placeholder, searchHandler} = props;

  return (
    <SearchContainer>
      <IoSearch size={24} color={colors.mediumDarkGray} />
      <input placeholder={placeholder}/>
      <button onClick={()=> searchHandler()}>Search</button>
    </SearchContainer>
  );
}

export default Header;
