import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "gatsby"

const Background = styled.div`
    position: absolute;
    height: 100%;
    right: 110%;
    left: -10%;
    top: 0;
    background: var(--color-neon-green);
    content: '';
    z-index: -1;
    transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
`;

const StyledNavLink = styled(Link)`
  font-size: var(--h2-font-size);
  color: var(--color-black);
  font-family: var(--font-family-heading);
  text-transform: lowercase;
  text-decoration: none;
  position: relative;

  &:hover {
    ${Background} {
        right: -10%;
    }
  }

  @media(min-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledNavAnchor = styled.a`
  font-size: var(--h2-font-size);
  color: var(--color-black);
  font-family: var(--font-family-heading);
  text-transform: lowercase;
  text-decoration: none;
  position: relative;

  &:hover {
    ${Background} {
        right: -10%;
    }
  }

  @media(min-width: 768px) {
    font-size: 1rem;
  }
`;

class NavLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let isExternal = /^https?:\/\//.test(this.props.to);
    let link;

    if (isExternal) {
      link = <StyledNavAnchor onClick={this.props.onClick} href={this.props.to} target="_blank">{this.props.children}<Background></Background></StyledNavAnchor>
    } else {
      link = <StyledNavLink onClick={this.props.onClick} to={this.props.to}>{this.props.children}<Background></Background></StyledNavLink>
    }

    return (link
    );
  }
}

export default NavLink
