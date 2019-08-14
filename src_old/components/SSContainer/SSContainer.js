import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const SSWrapper =  styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
    padding-bottom: calc(200px + 3rem);

    @media (min-width: 768px) {
      width: 70%;
    }

`;

const Scrollable = styled.div`

`;

const StoryItem = styled.div`

`;

const SSItem = styled.div`

`;

const Col = styled.div`
  width: 100%

  > ${SSItem}:first-child {
    margin-top: 6rem;
  }
  
  > ${SSItem} {
    margin-top: calc(100px + 3rem);
    margin-left: auto;
    margin-right: auto;
    width: 100%

    @media (min-width: 768px) {
      width: 70%;
    }
  }
  
`;

class SSContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <SSWrapper>
          <Col>
            {this.props.children.map((child) => {
                return <SSItem>{child}</SSItem>
            })}
          </Col>
        </SSWrapper>
    );
  }
}

export default SSContainer;