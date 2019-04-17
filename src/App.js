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
import VideoContainer from './components/VideoContainer/VideoContainer';
import Video from './components/Video/Video';


// Assets
import twitterSvg from './images/twitter.svg';
import instagramSvg from './images/instagram.svg';

import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'

import videoclip from './videos/videoclip.mp4'
import HamburgerIcon from './components/HamburgerIcon/HamburgerIcon';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});

const AppWrapper = styled.div`
  background: #DEDEDE;
  //padding: 10rem 1.953rem 0 1.953rem;

  min-height: 100vh;
  max-width: 1680px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 767px) {
    padding-top: 75px;
  }
`;

const FadeIn = styled.div`
  transform: ${props => props.fadeIn ? 'translateY(0%)' : 'translateY(20px)'};
  transition: all 1.6s cubic-bezier(.075,.82,.165,1);
  opacity: ${props => props.fadeIn ? '1' : '0'};
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
  width: 100%;
  margin: 0 auto;
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
          type="Interview"
          title="Gunna wants you to go out and get it"
          publication="The FADER"
          date="2017"
          image={img1}>
        </Story>
        <Story
          type="Essay"
          title="duis convallis convallis tellus id"
          publication="The FADER"
          date="2017"
          image={img2}>
        </Story>
        <Story
          type="Essay"
          title="pulvinar neque laoreet suspendisse interdum"
          publication="The FADER"
          date="2017"
          image={img3}>
        </Story>
        <Story
          type="Interview"
          title="laoreet sit amet"
          publication="The FADER"
          date="2017"
          image={img4}>
        </Story>
        <Story
          type="Interview"
          title="dictumst quisque sagittis purus"
          publication="The FADER"
          date="2017"
          image={img5}>
        </Story>
        <Story
          type="Profile"
          title="aliquam"
          publication="The FADER"
          date="2017"
          image={img1}>
        </Story>
        <Story
          type="Interview"
          title="viverra maecenas accumsan lacus"
          publication="The FADER"
          date="2017"
          image={img2}>
        </Story>
        <Story
          type="Profile"
          title="accumsan tortor posuere"
          publication="The FADER"
          date="2017"
          image={img3}>
        </Story>
        <Story
          type="Profile"
          title="suspendisse ultrices gravida dictum fusce ut"
          publication="The FADER"
          date="2017"
          image={img4}>
        </Story>
        <Story
          type="Interview"
          title="vulputate dignissim suspendisse in"
          publication="The FADER"
          date="2017"
          image={img5}>
        </Story>
        <Story
          type="Essay"
          title="feugiat sed"
          publication="The FADER"
          date="2017"
          image={img1}>
        </Story>
        <Story
          type="Profile"
          title="eu augue ut lectus"
          publication="The FADER"
          date="2017"
          image={img2}>
        </Story>
      </StoryContainer>
    </WritingWrapper>
  )
}

const VideoSection = () => {
  return (
    <VideoWrapper>
      <VideoContainer>
        <Video video={videoclip} image={img1}></Video>
        <Video video={videoclip} image={img2}></Video>
        <Video video={videoclip} image={img3}></Video>
        <Video video={videoclip} image={img4}></Video>
        <Video video={videoclip} image={img5}></Video>
      </VideoContainer>
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
  transform: ${props => props.fadeIn ? 'translateY(0%)' : 'translateY(20px)'};
  transition: all 1.6s cubic-bezier(.075,.82,.165,1);
  opacity: ${props => props.fadeIn ? '1' : '0'};
`;

const NavLinkWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #01FF70;
  z-index: 9;
  visibility:  ${props => props.visible ? 'visible' : 'hidden'};

  @media  (max-width: 767px) {
    overflow: hidden;
    padding-top: 6rem;
    padding-left: 1.953rem;
    padding-right: 1.953rem;
    transition-delay: .6s;
    transform-origin: top center;
    opacity: ${props => props.visible ? '1' : '0'};
    transform: ${props => props.visible ? 'perspective(1000px) rotateX(0)' : 'perspective(1000px) rotateX(-90deg)'};
    transition: transform .75s cubic-bezier(.075,.82,.165,1),opacity .3s cubic-bezier(.075,.82,.165,1);

    > * {
      transform: ${props => props.visible ? 'translateY(0%)' : 'translateY(20px)'};
      transition: all .75s cubic-bezier(.075,.82,.165,1);
      opacity: ${props => props.visible ? '1' : '0'};
    }
  }

  @media (min-width: 768px) {
    background: transparent;
    position: absolute;
    top: 1.953rem;
    left: 1.953rem;
    bottom: auto;
    right: auto;
    width: auto;
    min-height: initial;
    z-index: 10;
    transform: ${props => props.fadeIn ? 'translateY(0%)' : 'translateY(20px)'};
    transition: all 1.6s cubic-bezier(.075,.82,.165,1);
    opacity: ${props => props.fadeIn ? '1' : '0'};

    > * {
      margin-bottom: .25rem;
    }
  }
`;

const NavLogoWrapper = styled.div`
  z-index: 10;
  top: 1.953rem;
  position: absolute;
  left: 50%;
  transform: ${props => props.fadeIn ? 'translate(-50%, 0%)' : 'translate(-50%, 20px)'};
  transition: all 1.6s cubic-bezier(.075,.82,.165,1);
  opacity: ${props => props.fadeIn ? '1' : '0'};
`;
const HamburgerIconWrapper = styled.div`
   position: absolute;
   z-index: 10;
   top: calc(1.1 * 1.953rem);
   left: 1.953rem;
   transform: ${props => props.fadeIn ? 'translateY(0%)' : 'translateY(20px)'};
   transition: all 1.6s cubic-bezier(.075,.82,.165,1);
   opacity: ${props => props.fadeIn ? '1' : '0'};

   @media (min-width: 768px) {
     display: none;
   }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      menuOpen: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 500);

    this.toggleMenu();
    window.addEventListener("resize", this.toggleMenu)
  }

  toggleMenu = () => {
    let width = window.innerWidth;
    let open = false;

    if (width >= 768) {
      open = true;
    }
    this.setState({ menuOpen: open })
  }

  closeMenu = () => {
    let width = window.innerWidth;
    if (width < 768) {
      this.setState({ menuOpen: false })
    }
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <AppWrapper menuOpen={this.state.menuOpen}>
                <HamburgerIconWrapper fadeIn={this.state.loaded}>
                  <HamburgerIcon open={this.state.menuOpen} onClick={e => this.setState({ menuOpen: !this.state.menuOpen })}></HamburgerIcon>
                </HamburgerIconWrapper>
                <NavLinkWrapper fadeIn={this.state.loaded} visible={this.state.menuOpen}>
                  <NavLink onClick={this.closeMenu} to="/writing">Writing</NavLink>
                  <NavLink onClick={this.closeMenu} to="/video">Video</NavLink>
                  <NavLink onClick={this.closeMenu} to="/fashion">Fashion</NavLink>
                  <NavLink onClick={this.closeMenu} to="/live+radio">live + radio</NavLink>
                  <NavLink onClick={this.closeMenu} to="/s+s">s+s</NavLink>
                  <NavLink onClick={this.closeMenu} to="/info">Info</NavLink>
                </NavLinkWrapper>
                <NavLogoWrapper  fadeIn={this.state.loaded}>
                  <NavLogo to="/">nazuk</NavLogo>
                </NavLogoWrapper>
              <NavTop fadeIn={this.state.loaded}>
              </NavTop>

              <FadeIn  fadeIn={this.state.loaded}>
                <PoseGroup>
                  <RouteContainer key={location.pathname}>
                    <Switch location={location}>
                      <Route path="/" exact component={Index} key="index" />
                      <Route path="/writing/" component={Writing} key="writing" />
                      <Route path="/video/" component={VideoSection} key="video" />
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
