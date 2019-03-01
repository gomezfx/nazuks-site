import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Background = styled.div`
    position: absolute;
    height: 100%;
    right: 110%;
    left: -10%;
    top: 0;
    background: #01FF70;
    content: '';
    z-index: -1;
    transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
`;

const StyledNavLink = styled(Link)`
  font-size: 1rem;
  color: #000000;
  font-family: 'DrukWide';
  text-transform: lowercase;
  text-decoration: none;
  position: relative;

  &:hover {
    ${Background} {
        right: -10%;
    }
  }
`;

class NavLink extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <StyledNavLink to={this.props.to}>
        {this.props.children}
        <Background></Background>
      </StyledNavLink>
    );
  }
}

export default NavLink
