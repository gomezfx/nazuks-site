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
    padding-bottom: 200px;

    @media (min-width: 768px) {
      width: 80%;
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
    }

    > * {
      margin-top: 200px;
    }
  }
`;

const ColRight = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: calc(50% - 75px);
    margin-left: 75px;

    > * {
      margin-top: 200px;
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
    let even = this.props.children.filter((child, index) => (index % 2));
    let odd = this.props.children.filter((child, index) => !(index % 2));

    return (
        <TwoColumnWrapper>
          <ColMobile>{this.props.children}</ColMobile>
          <ColLeft>
            {
              odd.map((child, index) => <ColItem>{child}</ColItem>)
            }
          </ColLeft>
          <ColRight>
            {
              even.map((child, index) => <ColItem>{child}</ColItem>)
            }
          </ColRight>
        </TwoColumnWrapper>
    );
  }
}

export default TwoColumnContainer;