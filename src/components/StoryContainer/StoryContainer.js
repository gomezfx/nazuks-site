import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const StoryContainer =  styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 200px;
`;

const StoryWrapper = styled.div`

`;
const Scrollable = styled.div`

`;

const StoryItem = styled.div`

`;

const ColLeft = styled.div`
  width: calc(50% - 75px);
  marign-right: 75px;

  > *:first-child {
    margin-top: 0;
  }
  
  > * {
    margin-top: 200px;
  }
`;

const ColRight = styled.div`
  width: calc(50% - 75px);
  margin-left: 75px;

  > * {
    margin-top: 200px;
  }
`;

class Story extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let even = this.props.children.filter((child, index) => (index % 2));
    let odd = this.props.children.filter((child, index) => !(index % 2));

    return (
        <StoryContainer>
          <ColLeft>
            {
              odd.map((child, index) => <StoryItem>{child}</StoryItem>)
            }
          </ColLeft>
          <ColRight>
            {
              even.map((child, index) => <StoryItem>{child}</StoryItem>)
            }
          </ColRight>
        </StoryContainer>
    );
  }
}

export default Story;