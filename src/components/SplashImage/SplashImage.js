import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';
import { getUnsplashImage } from '../../helpers';

const PosedSplashImage = posed.div({
  hidden: {
    opacity: 0,
    y: 100
  },
  visible: {
    opacity: 1,
    y: 0
  }
});

const ImageWrapper = styled.div`
    width: 500px;
    position: relative;
    z-index: 2;
`;

const AspectRatio = styled.div`
    width: 100%;
    padding-bottom: 100%;
    background-image: ${props => `url(${props.src})`};
    background-size: cover;
    background-position: 50% 50%;
`;

const HiddenImage = styled.img`
  height: 100px;
  width: 100px;
  position: absolute;
  opacity: 0;
`

const unsplashImg = getUnsplashImage();

class SplashImage extends Component {
  constructor(props) {
      super(props);

      this.state = {
          loaded: false,
      }
  }

  handleOnLoad(event) {
    setTimeout(() => {
      this.setState({ loaded: true });
    }, 100);
  }

  render() {
    return (
      <PosedSplashImage>
        <ImageWrapper>
          <HiddenImage src={unsplashImg} onLoad={(event) => this.handleOnLoad(event)}></HiddenImage>
          <AspectRatio src={unsplashImg}></AspectRatio>
        </ImageWrapper>
      </PosedSplashImage>
    );
  }
}

export default SplashImage
