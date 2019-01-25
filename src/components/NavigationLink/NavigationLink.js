import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const PosedNavigationLink = posed.div({
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
});

const StyledNavigationLink = styled.a`
  color: black;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Noto Sans JP', sans-serif;
  margin-bottom: 20px;
  display: inline-block;
`;

class NavigationLink extends Component {
  render() {
    return (
      <PosedNavigationLink><StyledNavigationLink>{this.props.children}</StyledNavigationLink></PosedNavigationLink>
    );
  }
}


export default NavigationLink
