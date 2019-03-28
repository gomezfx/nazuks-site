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
  background: black;
  padding-top: 45.454545454%;
  position: relative;
  overflow: hidden;
  &:hover {

  }

  video {
    transition: all .7s cubic-bezier(.075,.82,.165,1);

      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
      opacity: 0;
  }
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
  
  &:hover {

  }
  
`;


const Title = styled.div`
  font-size: 3rem;
  font-family: 'DrukWide';
  font-weight: bold;
  text-transform: uppercase;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000000;
  color: transparent;;
  letter-spacing: .2rem;
  //position: absolute;
  //bottom: 0;
  //left: 0;
  line-height: 1;
  transition: all .7s cubic-bezier(.075,.82,.165,1);
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  font-family: 'Circular';
  color: black;
  //position: absolute;
  //bottom: -2rem;
  transition: all .7s cubic-bezier(.075,.82,.165,1);

`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: -2.9rem;
  left: 0;
  transition: all .7s cubic-bezier(.075,.82,.165,1);

`;

const StoryWrapper = styled.div`
  cursor: pointer;
  transition-delay: .6s;
  transform-origin: top center;
  opacity: ${props => props.visible ? '1' : '0'};
  transform: ${props => props.visible ? 'perspective(1000px) rotateX(0)' : 'perspective(1000px) rotateX(-90deg)'};
  transition: transform 1.6s cubic-bezier(.075,.82,.165,1),opacity .3s cubic-bezier(.075,.82,.165,1);  

  &:hover {
    ${Image} {
      transform: scale(1.2);
      background-color: rgba(1, 255, 112, 1);
    }

    ${TextWrapper} {
      transform: scale(1.3);

    }

    ${SubTitle},
    ${Title} {
      color: black;
      -webkit-text-stroke-width: 1px;
    }

    video {
        opacity: 1;
    }
  }
`;


class Video extends Component {
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
          <StoryWrapper visible={this.state.revealed}>
            <ImageWrapper>
                <Image image={this.props.image}></Image>
                <video autoplay="autoplay" muted loop src={this.props.video}></video>
            </ImageWrapper>
            {/* <TextWrapper>
            <Title>{this.props.title}</Title>
            <SubTitle>The FADER (2017)</SubTitle>
            </TextWrapper> */}
          </StoryWrapper>
          </div>
          {/* <Title>{this.props.children}</Title>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in nisi erat. Nullam vitae enim vel est volutpat sodales tincidunt tristique elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce lobortis commodo eleifend. Nam quis orci ligula. Cras id viverra arcu, ut consectetur metus. Suspendisse vel fermentum.</Description> */}

      </Waypoint>
    );
  }
}

export default Video;