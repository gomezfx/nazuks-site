import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const InfoWrapper =  styled.div`
    position: relative;
    margin-left: -1.953rem;
    width: 100vw;

    @media (min-width: 768px) {
      margin: 0 auto;
      width: 80%;
    }

`;

const InfoItem = styled.div`
    background: var(--color-neon-green);
    display: inline-block;
    padding: 5rem 1.953rem 2rem 1.953rem;


    @media (min-width: 768px) {
        padding: 5rem 3rem 2rem 3rem;
        max-width: 50%;
      }
  
`;

class InfoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        infoWidth: 0
    }
  }

  render() {
    return (
        <InfoWrapper>
            <InfoItem>
                {this.props.children}
            </InfoItem>
        </InfoWrapper>
    );
  }
}

export default InfoContainer;