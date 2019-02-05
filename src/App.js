import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import NavigationLink from './components/NavigationLink/NavigationLink';
import Logo from './components/Logo/Logo';
import SplashImage from './components/SplashImage/SplashImage';
import Story from './components/Story/Story';
import StoryContainer from './components/StoryContainer/StoryContainer';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const PosedWrapper = posed.div({
  visible: {
    delayChildren: 1000
  },
  hidden: {},
});

const AppWrapper = styled.div`
  background: #DEDEDE;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const PosedNavigationLinkWrapper = posed.div({
  visible: {
    delayChildren: 2000
  },
  hidden: {},
});

const NavigationLinkWrapper = styled(PosedNavigationLinkWrapper)`
  position: fixed;
  bottom: 10vh;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  width: 100%;
`;

const PosedMenuWrapper = posed.div({
  visible: {
    delayChildren: 1000
  },
  hidden: {},
});


const Container = styled.div`
  width: 75vw;
  margin: 0 auto;
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
    transition: { delay: 1000 }
  }
});

const Emoji = styled.div`
  font-size: 100px;
  transition:         transform 1s ease-in-out;

  &:hover {
          transform: rotate(360deg);

  }
`;

const IndexWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WritingWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;

  &::-webkit-scrollbar { 
    display: none; 
  }
`;

const VideoWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FashionWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SnSWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Index = () => {
  return (
    <IndexWrapper>
      <PosedEmoji><Emoji>🤑</Emoji></PosedEmoji>
    </IndexWrapper>
  )
}

const Writing = () => {
  return (
    <WritingWrapper>
      <StoryContainer>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
        <Story></Story>
      </StoryContainer>
    </WritingWrapper>
  )
}

const Video = () => {
  return (
    <VideoWrapper>
      VIDEO
    </VideoWrapper>
  )
}

const Fashion = () => {
  return (
    <FashionWrapper>
      FASHION
    </FashionWrapper>
  )
}

const SnS = () => {
  return (
    <SnSWrapper>
      S+S
    </SnSWrapper>
  )
}

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
      <Route
        render={({ location }) => (
          <div className="App">
            <AppWrapper>
              <PosedMenuWrapper pose={this.state.loaded ? 'visible' : 'hidden'}>
                <Logo to="/"></Logo>
                <NavigationLinkWrapper>
                  <NavigationLink to="/writing">Writing</NavigationLink>
                  <NavigationLink to="/video">Video</NavigationLink>
                  <NavigationLink to="/fashion">Fashion</NavigationLink>
                  <NavigationLink to="s+s">S+S</NavigationLink>
                </NavigationLinkWrapper>
              </PosedMenuWrapper>

              <PoseGroup>
                <RouteContainer key={location.pathname}>
                  <Switch location={location}>
                    <Route path="/" exact component={Index} key="index" />
                    <Route path="/writing/" component={Writing} key="writing" />
                    <Route path="/video/" component={Video} key="video" />
                    <Route path="/fashion/" component={Fashion} key="fashion" />
                    <Route path="/s+s/" component={SnS} key="sns" />
                  </Switch>
                </RouteContainer>
              </PoseGroup>


            </AppWrapper>
          </div>
        )}
      />

    );
  }
}

export default App;
