import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const TwoColumnWrapper =  styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 70%;
    }
`;


const ColItem = styled.div`

`;

const ColLeft = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: calc(50% - 75px);
    margin-right: 75px;

    > *:first-child {
      margin-top: 0;
      padding-top: 0;
    }

    > * {
      padding-bottom: ${props => props.spacing === '1x' ? 'calc(56.25%/1.5)' : 'calc(105%/2.25)'};
    }
  }
`;

const ColRight = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: calc(50% - 75px);
    margin-left: 75px;

    > *:first-child {
      padding-top: ${props => props.spacing === '1x' ? 'calc(56.25%/1.5)' : 'calc(105%/2.25)'};
    }

    > * {
      padding-bottom: ${props => props.spacing === '1x' ? 'calc(56.25%/1.5)' : 'calc(105%/2.25)'};
    }
  }
`;

const ColMobile = styled.div`
  width: 100%;

  > * {
    margin-top: 100px;

    &:first-child {
      margin-top: 0;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

class TwoColumnContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let even = [];
    let odd = [this.props.children];

    if (Array.isArray(this.props.children)) {
      even = this.props.children ? this.props.children.filter((child, index) => (index % 2)) : [];
      odd = this.props.children ? this.props.children.filter((child, index) => !(index % 2)) : [];
    }
    return (
        <TwoColumnWrapper spacing={this.props.spacing}>
          <ColMobile>{this.props.children}</ColMobile>
          <ColLeft spacing={this.props.spacing}>
            {
              odd.reverse().map((child, index) => <ColItem>{child}</ColItem>)
            }
          </ColLeft>
          <ColRight spacing={this.props.spacing}>
            {
              even.map((child, index) => <ColItem>{child}</ColItem>)
            }
          </ColRight>
        </TwoColumnWrapper>
    );
  }
}

export default TwoColumnContainer;