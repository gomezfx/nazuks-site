import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const PosedStory = posed.div({
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 100, duration: 600}
  }
});

const Title =  styled.div`
  font-size: 24px;
  font-family: 'Noto Sanss JP', sans-serif;
  font-weight: 500;
  border: 2px solid black;
  padding: 5px 10px;
  display: inline-block;
  text-transform: uppercase;
`;

const Description =  styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Noto Sanss JP', sans-serif;
  font-weight: 300;
  display: block;
  text-transform: uppercase;
`;

const ImageWrapper = styled.div`
  width: calc(65vh*21/29.7);
  height: 65vh;
  background-image: ${props => 'url(https://source.unsplash.com/random/1000x1000?sig=' + props.param + ')'};
  position: relative;
  background-blend-mode: multiply;
  background-color: #444;
  filter: grayscale(100%);
  transition: all 2s cubic-bezier(0.190, 1.000, 0.220, 1.000);
  cursor: pointer;
  &:hover {
    background-color: transparent;
    filter: none;
  }
`;

const Image = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
`;

const StoryWrapper = styled.div`

`;

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      revealed: false
    }
  }

  reveal() {
    this.setState({ revealed: true });
  }

  render() {
    return (
      <Waypoint onEnter={() => this.reveal()}>
        <PosedStory pose={this.state.revealed ? 'visible' : 'hidden'}>
          <StoryWrapper>
            <ImageWrapper param={Math.floor((Math.random() * 10000) + 1)}><Image></Image></ImageWrapper>
          </StoryWrapper>
          {/* <Title>{this.props.children}</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisi erat. Nullam vitae enim vel est volutpat sodales tincidunt tristique elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce lobortis commodo eleifend. Nam quis orci ligula. Cras id viverra arcu, ut consectetur metus. Suspendisse vel fermentum.</Description> */}
        </PosedStory>
      </Waypoint>
    );
  }
}

export default Story;