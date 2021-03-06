import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import { Waypoint } from 'react-waypoint';

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

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => props.loaded ? '0' : '1'};
    background-color: rgba(1, 255, 112, 1);
    z-index: 0;
    content: ' ';
    transition: all .25s ease-in;
    transition-delay: 1s;
  }
  
`;

const TextWrapper = styled.div`
  padding-top: 1rem;
  transform: translateY(calc(-50% - 1rem));
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  position: absolute;
`;

const DateText = styled.div`
  font-size: 1rem;
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  color: var(--color-black);
`;

const Text = styled.h2`
  font-size: var(--h3-font-size);
  font-weight: bold;
  text-transform: uppercase;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: var(--color-black);
  color: transparent;
  letter-spacing: .2px;
  margin: 0;
  line-height: 1;
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  padding: 5px 0;
`;

const Type = styled.div`
  font-size: 1rem;
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  padding: 5px 7px;
  background: var(--color-black);
  color: var(--color-light-gray);
  display: inline-block;
  text-transform: uppercase;
`;

const Role = styled(Type)`
  color: var(--color-black);
  background: transparent;
  margin-left: .3rem;
`;


const StyledVideo = styled.div`
  cursor: pointer;
  transition-delay: .6s;
  transform-origin: top center;
  opacity: ${props => props.visible ? '1' : '0'};
  transform: ${props => props.visible ? 'perspective(1000px) rotateX(0)' : 'perspective(1000px) rotateX(-90deg)'};
  transition: transform 1.6s cubic-bezier(.075,.82,.165,1),opacity .3s cubic-bezier(.075,.82,.165,1);  

  &:hover {
    ${Image} {
      transform: scale(1.2);
      background-color: rgba(1, 255, 112, .15);
    }

    ${TextWrapper} {
      transform: translateY(0);
    }

    ${Text} {
      color: var(--color-black);
    }

    video {
        opacity: 1;
    }
  }
`;

const ImageLoad = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;


class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      revealed: false,
      imageLoaded: false
    }
  }

  reveal() {
    setTimeout(() => {
      this.setState({ revealed: true });
    }, 0);
  }

  handleImageLoaded() {
    console.log('loaded');
    this.setState({ imageLoaded: true });
  }

  handleImageErrored() {

  }

  render() {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = new Date(this.props.date).toLocaleDateString("en-US", options);

    return (
      <Waypoint onEnter={() => this.reveal()}>
          <a href={this.props.link} target="_blank">
          <StyledVideo visible={this.state.revealed}>
            <ImageWrapper>
                <ImageLoad
                  src={this.props.image}
                  onLoad={this.handleImageLoaded.bind(this)}
                  onError={this.handleImageErrored.bind(this)}>
                </ImageLoad>
                <Image loaded={this.state.imageLoaded} image={this.props.image}></Image>
                {/* <video autoplay="autoplay" muted loop src={this.props.video}></video> */}
            </ImageWrapper>
            <TextWrapper>
              <Type>{this.props.type}</Type><Role>{this.props.role}</Role>
              <Text>{this.props.title}</Text>
              <DateText>{this.props.publication}{this.props.publication && this.props.date ? ', ' : ''}{formattedDate}</DateText>
            </TextWrapper>
          </StyledVideo>
          </a>
      </Waypoint>
    );
  }
}

export default Video;