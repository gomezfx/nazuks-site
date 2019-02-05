import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const StoryContainer =  styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Scrollable = styled.div`

`;

class Story extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <StoryContainer>{this.props.children}</StoryContainer>
    );
  }
}

export default Story;