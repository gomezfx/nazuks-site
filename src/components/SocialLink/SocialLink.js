import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Background = styled.div`
    position: absolute;
    height: 100%;
    right: 110%;
    left: -10%;
    top: -10%;
    background: #01FF70;
    content: '';
    z-index: -1;
    transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
`;

const StyledSocialLink = styled.a`
  display: block;
  width: 1.25rem;
  position: relative;

  img {
      width: 100%;
  }
  
  &:hover {
    ${Background} {
        right: -10%;
    }
  }
`;

class SocialLink extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <StyledSocialLink target="_blank" href={this.props.to}>
        <img src={this.props.src} />
        <Background></Background>
      </StyledSocialLink>
    );
  }
}

export default SocialLink
