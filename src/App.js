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
    delayChildren: 1000,
    staggerChildren: 1000
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
  top: 50%;
  transform: translateY(-50%);
  left: 50px;
  z-index: 10;
`;

const PosedMenuWrapper = posed.div({
  visible: {
    delayChildren: 1000,
    staggerChildren: 50
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
            <div>[ homepage content here ]</div>
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
