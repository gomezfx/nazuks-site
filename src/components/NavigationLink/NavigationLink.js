import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import Tilt from 'react-tilt';


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
  color: transparent;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  font-family: 'DrukWide';
  display: inline-block;
  margin: 0 100px;
  letter-spacing: 2px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000000;
  position: relative;
  cursor: pointer;
  transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);

  &:hover {
    &:after {
      right: -10%;
    }
  }

  &:after {
    position: absolute;
    height: 100%;
    right: 110%;
    left: -10%;
    top: 0;
    background: #01FF70;
    content: '';
    z-index: -1;
    transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
  }
`;

class NavigationLink extends Component {
  render() {
    return (
      <PosedNavigationLink>
        <Tilt className="Tilt" options={{ reset : true }} >
            <div className="Tilt-inner">
              <StyledNavigationLink href={this.props.href}>{this.props.children}</StyledNavigationLink>
            </div>
          </Tilt>
        </PosedNavigationLink>
    );
  }
}


export default NavigationLink
