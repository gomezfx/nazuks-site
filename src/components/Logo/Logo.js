import React, { Component } from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import posed from 'react-pose';

const PosedLogo = posed.div({
  hidden: {
    opacity: 0,
    textShadow: '-0px 10px 0px rgba(0, 0, 255, 1), -0px 40px 0px rgba(102, 102, 255, 1), -0px 80px 0px rgba(204, 204, 255, 1)',
    transform: 'translateY(25vh) rotateX(45deg)'
  },
  visible: {
    opacity: 1,
    textShadow: '0px 0px 0px rgba(0, 0, 255, 0), 0px 0px 0px rgba(102, 102, 255, 0), 0px 0px 0px rgba(204, 204, 255, 0)',
    transition: { type: 'spring', stiffness: 80 },
    transform: 'translateY(0vh) rotateX(0deg)'
  }
});

const StyledLogo = styled.div`
  display: inline-block;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 40px;
  margin: 0 auto;
  top: 0;
  cursor: pointer;
  z-index: 5;
`;

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledTitle = styled.a`
  color: black;
  font-weight: normal;
  font-family: 'DrukWide';
  font-size: 42px;
  display: inline-block;
  position: relative;
`;

const TitleStroke = styled(StyledTitle)`
  position: absolute;
  top: 0;
  left: 0;
   -webkit-text-stroke-width: 1px;
   -webkit-text-stroke-color: white;
   color: white;
   z-index: 15
`

const Overlay = styled.div`
  mix-blend-mode: overlay;
`;

const PerspectiveOuter = styled.div`
  perspective: 75px;
`;

const PerspectiveInner= styled.div`
  transform: rotateX(45deg);
`;

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
        <StyledLogo>
          <Tilt className="Tilt" options={{ scale : 1.5, reset : false }} >
            <div className="Tilt-inner">
              
                <PerspectiveOuter>
                  <PosedLogo>
                    <TitleWrapper>
                      <StyledTitle>nazuk</StyledTitle>
                    </TitleWrapper>
                  </PosedLogo>
                </PerspectiveOuter>
              
            </div>
          </Tilt>
        </StyledLogo>
    );
  }
}

export default Logo
