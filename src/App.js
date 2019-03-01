import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Components
import NavigationLink from './components/NavigationLink/NavigationLink';
import NavLink from './components/NavLink/NavLink';
import NavLogo from './components/NavLogo/NavLogo';
import SocialLink from './components/SocialLink/SocialLink';
import SplashImage from './components/SplashImage/SplashImage';
import Story from './components/Story/Story';
import StoryContainer from './components/StoryContainer/StoryContainer';

// Assets
import twitterSvg from './images/twitter.svg';
import instagramSvg from './images/instagram.svg';

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
  overflow: hidden;
  //padding: 10rem 1.953rem 0 1.953rem;
  //padding-top: 75px;
  min-height: 100vh;
  max-width: 1680px;
  margin: 0 auto;
`;

const FadeIn = styled.div`
  transform: ${props => props.visible ? 'translateY(0%)' : 'translateY(20px)'};
  transition: all 1.6s cubic-bezier(.075,.82,.165,1);
  opacity: ${props => props.visible ? '1' : '0'};
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
  width: 100%;
  margin: 0 auto;
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
const TitleCard = styled.div`
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  //background: black;
`;

const Writing = () => {
  return (
    <WritingWrapper>
      {/* <TitleCard>
        WRITING
      </TitleCard> */}
      <StoryContainer>
        <Story
          title="Gunna wants you to go out and get it"
          subtitle="The FADER (2017)">
        </Story>
        <Story
          title="duis convallis convallis tellus id"
          subtitle="The FADER (2017)">
        </Story>
        <Story
          title="pulvinar neque laoreet suspendisse interdum"
          subtitle="The FADER (2017)">
        </Story>
        <Story
          title="laoreet sit amet"
          subtitle="The FADER (2017)">
        </Story>
        <Story 
          title="dictumst quisque sagittis purus"
          subtitle="The FADER (2017)">
        </Story>
        <Story 
          title="aliquam"
          subtitle="The FADER (2017)">
        </Story>
        <Story 
          title="viverra maecenas accumsan lacus"
          subtitle="The FADER (2017)">
        </Story>
        <Story
          title="accumsan tortor posuere"
          subtitle="The FADER (2017)">
        </Story>
        <Story
          title="suspendisse ultrices gravida dictum fusce ut"
          subtitle="The FADER (2017)">
        </Story>
        <Story
          title="vulputate dignissim suspendisse in"
          subtitle="The FADER (2017)">
        </Story>
        <Story
          title="feugiat sed"
          subtitle="The FADER (2017)">
        </Story>
        <Story
          title="eu augue ut lectus"
          subtitle="The FADER (2017)">
        </Story>
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

const NavTop = styled.div`
  top: 1.953rem;
  left: 1.953rem;
  right: 1.953rem;
  position: fixed;
  z-index: 10;
`;

const NavLinkWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: .25rem;
  }
`;

const NavLogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
`;

const SocialLinkWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  align-items: flex-end;

   > * {
     margin-right: 1rem;
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
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 500);
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <AppWrapper>
              <FadeIn  visible={this.state.loaded}>
                <NavTop>
                  <NavLinkWrapper>
                    <NavLink to="/writing">Writing</NavLink>
                    <NavLink to="/video">Video</NavLink>
                    <NavLink to="/fashion">Fashion</NavLink>
                    <NavLink to="s+s">S+S</NavLink>
                  </NavLinkWrapper>
                  <NavLogoWrapper>
                    <NavLogo to="/">nazuk</NavLogo>
                  </NavLogoWrapper>
                  <SocialLinkWrapper>
                    <SocialLink to="http://www.instagram.com" src={instagramSvg}></SocialLink>
                    <SocialLink to="http://www.twitter.com" src={twitterSvg}></SocialLink>
                  </SocialLinkWrapper>
                </NavTop>

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
              </FadeIn>
            </AppWrapper>
          </div>
        )}
      />

    );
  }
}

export default App;
