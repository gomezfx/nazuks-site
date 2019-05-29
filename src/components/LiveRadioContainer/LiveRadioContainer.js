import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const LiveRadioWrapper =  styled.div`
    position: relative;
    margin: 0 auto;

    @media (min-width: 768px) {
      width: 80%;
    }
`;

const LiveRadioItem = styled.div`
    //background: var(--color-neon-green);
    display: inline-block;
    padding: 5rem 3rem 2rem 3rem;


    @media (min-width: 768px) {
        max-width: 50%;
        padding: 1.953rem 3rem 2rem 3rem;
      }
  
`;

class LiveRadioContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <LiveRadioWrapper>
            <LiveRadioItem>
                {this.props.children}
            </LiveRadioItem>
        </LiveRadioWrapper>
    );
  }
}

export default LiveRadioContainer;