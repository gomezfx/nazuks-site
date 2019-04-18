import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const Description =  styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Noto Sanss JP', sans-serif;
  font-weight: 300;
  display: block;
  text-transform: uppercase;
`;

const ImageWrapper = styled.div`
  background: var(--color-black);
  padding-top: 56.25%;
  position: relative;
  overflow: hidden;
`;

const Image = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background-image: ${props => 'url(' + props.image + ')'};
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  background-color: rgba(1, 255, 112, 1);
  background-blend-mode: overlay;
  background-size: cover;
  background-position: 50% 50%;
`;


const Title = styled.h2`
  font-size: var(--h3-font-size);
  font-weight: bold;
  text-transform: uppercase;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--color-black);
  color: transparent;
  letter-spacing: 2px;
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  padding: 5px 0;
  line-height: 1;
  margin: 0;
`;

const TextWrapper = styled.div`
  transform: translateY(-50%);
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  position: absolute;

`;

const StoryType = styled.div`
  font-size: 1rem;
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  padding: 5px 7px;
  background: var(--color-black);
  display: inline-block;
  text-transform: uppercase;
  color: var(--color-light-gray);
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: var(--color-black);
  transition: all .7s cubic-bezier(.075,.82,.165,1);
`;

const StyledStory = styled.section`
  cursor: pointer;
  transition-delay: .6s;
  transform-origin: top center;
  opacity: ${props => props.visible ? '1' : '0'};
  transform: ${props => props.visible ? 'perspective(1000px) rotateX(0)' : 'perspective(1000px) rotateX(-90deg)'};
  transition: transform 1.6s cubic-bezier(.075,.82,.165,1),opacity .3s cubic-bezier(.075,.82,.165,1);  

  &:hover {
    ${Image} {
      transform: scale(1.2);
      background-color: rgba(1, 255, 112, 0);
    }

    ${TextWrapper} {
      transform: scale(1.3) translateY(-50%);
    }

    ${Title} {
      color: black;
      -webkit-text-stroke-width: 1px;
    }
  }
`;

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      revealed: false
    }
  }

  reveal() {
    setTimeout(() => {
      this.setState({ revealed: true });
    }, 0);
  }

  render() {
    return (
      <Waypoint onEnter={() => this.reveal()}>
          <div>
          <StyledStory visible={this.state.revealed}>
            <ImageWrapper><Image image={this.props.image}></Image></ImageWrapper>
            <TextWrapper>
              <StoryType>{this.props.type}</StoryType>
              <Title>{this.props.title}</Title>
              <SubTitle>{this.props.publication}, {this.props.date}</SubTitle>
            </TextWrapper>
          </StyledStory>
          </div>
      </Waypoint>
    );
  }
}

export default Story;