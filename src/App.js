import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import posed from 'react-pose';

import NavigationLink from './components/NavigationLink/NavigationLink';
import Logo from './components/Logo/Logo';
import SplashImage from './components/SplashImage/SplashImage';
import Story from './components/Story/Story';

const PosedWrapper = posed.div({
  visible: {
    delayChildren: 1000
  },
  hidden: { },
});

const Scene1 = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 10vh;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100%;
`;

const PosedMenuWrapper = posed.div({
  visible: {
    delayChildren: 2000
  },
  hidden: {},
});

const Container = styled.div`
  width: 75vw;
  margin: 0 auto;
`;

const Scene2 = styled.div`
  padding: 0;
  min-height: 100vh;
  width: 100vw;
`;

const ColContainer = styled.div`
  display: flex;
`;

const ColLeft = styled.div`
  width: 50%;
`;

const ColRight = styled.div`
  width: 50%;
  margin-left: 150px;
  margin-top: 250px;
`;

const PosedEmoji = posed.div({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1000}
  }
});

const Emoji = styled.div`
  font-size: 100px;
  transition:         transform 1s ease-in-out;

  &:hover {
          transform: rotate(360deg);

  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.setState({ loaded: true })
  }

  render() {
    return (
      <div className="App">
        <Scene1>
          <PosedWrapper pose={this.state.loaded ? 'visible' : 'hidden'}>
            <Logo></Logo>
            <PosedMenuWrapper>
              <MenuWrapper>
                <NavigationLink>Writing</NavigationLink>
                <NavigationLink>Video</NavigationLink>
                <NavigationLink>Fashion</NavigationLink>
                <NavigationLink>S+S</NavigationLink>
              </MenuWrapper>
            </PosedMenuWrapper>
            <PosedEmoji><Emoji>🤑</Emoji></PosedEmoji>
          </PosedWrapper>
        </Scene1>
        <Scene2>
          <Container>
            <ColContainer>
              <ColLeft>
                <Story></Story>
                <Story></Story>
                <Story></Story>
              </ColLeft>
              <ColRight>
                <Story></Story>
                <Story></Story>
                <Story></Story>
              </ColRight>
            </ColContainer>
          </Container>
        </Scene2>
      </div>
    );
  }
}

export default App;
