import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

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

const StyledNavLogo = styled(Link)`
  color: #000000;
  font-weight: normal;
  font-family: 'DrukWide';
  font-size: 1.25rem;
  position: relative;
  letter-spacing: 0rem;
  text-decoration: none;

  &:hover {
    ${Background} {
        right: -10%;
    }
  }
`;

class NavLogo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
        <StyledNavLogo to={this.props.to}>
          {this.props.children}
          <Background></Background>
        </StyledNavLogo>
    );
  }
}

export default NavLogo
