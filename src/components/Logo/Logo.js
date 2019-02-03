import React, { Component } from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import posed from 'react-pose';

const PosedLogo = posed.div({
  hidden: {
    opacity: 0,
    textShadow: '-0px 10px 0px rgba(1, 255, 112, 1), -0px 40px 0px rgba(1, 255, 112, 1), -0px 80px 0px rgba(1, 255, 112, 1)',
    transform: 'translateY(25vh) rotateX(45deg)'
  },
  visible: {
    opacity: 1,
    textShadow: '0px 0px 0px rgba(1, 255, 112, 0), 0px 0px 0px rgba(1, 255, 112, 0), 0px 0px 0px rgba(1, 255, 112, 0)',
    transition: { type: 'spring', stiffness: 80 },
    transform: 'translateY(0vh) rotateX(0deg)'
  }
});

const StyledLogo = styled.div`
  display: inline-block;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
  margin: 40px auto 0 auto;
  top: 0;
  cursor: pointer;
  z-index: 5;
`;

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledTitle = styled.a`
  color: transparent;
  font-weight: normal;
  font-family: 'DrukWide';
  font-size: 48px;
  display: inline-block;
  position: relative;
  letter-spacing: 2px;
`;

const TitleStroke = styled(StyledTitle)`
   -webkit-text-stroke-width: 2px;
   -webkit-text-stroke-color: #000000;
   z-index: 15
   position: relative;

   &:hover {
    &:after {
      right: -10%;
    }
  }

  &:after {
    position: absolute;
    height: 100%;
    right: 110%;
    left: -10%;
    top: 0;
    background: #01FF70;
    content: '';
    z-index: -1;
    transition: all 500ms cubic-bezier(0.190, 1.000, 0.220, 1.000);
  }
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
                      <TitleStroke>nazuk</TitleStroke>
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
