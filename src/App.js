import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { withRouter } from "react-router";

// Components
import Loader from './components/Loader/Loader';
import NavigationLink from './components/NavigationLink/NavigationLink';
import NavLink from './components/NavLink/NavLink';
import NavLogo from './components/NavLogo/NavLogo';
import SocialLink from './components/SocialLink/SocialLink';
import SplashImage from './components/SplashImage/SplashImage';
import Article from './components/Article/Article';
import TwoColumnContainer from './components/TwoColumnContainer/TwoColumnContainer';
import VideoContainer from './components/VideoContainer/VideoContainer';
import InfoContainer from './components/InfoContainer/InfoContainer';
import LiveRadioContainer from './components/LiveRadioContainer/LiveRadioContainer';
import Video from './components/Video/Video';


// Assets
import twitterSvg from './images/twitter.svg';
import instagramSvg from './images/instagram.svg';

import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import fashionImg1 from './images/fashion1.jpg'
import fashionImg2 from './images/fashion2.jpg'
import fashionImg3 from './images/fashion3.jpg'

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
    //padding-top: 75px;
    padding-left: 1.953rem;
    padding-right: 1.953rem;
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
  width: 100%;
  margin: 0 auto;
`;

const SnSWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LiveRadioWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Page404Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const InfoWrapper = styled.div`
  width: 100%;
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
`;

const Writing = (props) => {
  return (
    <WritingWrapper>
      <TwoColumnContainer spacing={'1x'}>
        {
          props.articles.map((writingArticle) => {
            return (
              <Article
                type={writingArticle.type}
                title={writingArticle.title}
                publication={writingArticle.publication}
                date={writingArticle.date}
                image={writingArticle.image}
                link={writingArticle.link}>
              </Article>
            )
          })
        }
      </TwoColumnContainer>
    </WritingWrapper>
  )
}

const VideoSection = (props) => {
  return (
    <VideoWrapper>
      <VideoContainer>
        {
          props.videos.map((video) => {
            return (
              <Video
                video={videoclip}
                image={img1}
                type={video.type}
                role={video.role}
                text={video.text}
                date={video.date}
                publication={video.publication}
                link={video.link}>
              </Video>
            )
          })
        }
      </VideoContainer>
    </VideoWrapper>
  )
}

const Fashion = (props) => {
  return (
    <FashionWrapper>
      <TwoColumnContainer spacing={'2x'}>
        {
          props.fashionArticles.map((fashionArticle) => {
            return (
              <Article
                aspectRatio="portrait"
                type={fashionArticle.type}
                role={fashionArticle.role}
                title={fashionArticle.title}
                publication={fashionArticle.publication}
                date={fashionArticle.date}
                image={fashionArticle.image}
                link={fashionArticle.link}>
              </Article>
            )
          })
        }
      </TwoColumnContainer>
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

const RadioTitle = styled.h2`
  font-size: var(--h4-font-size);
  font-weight: bold;
  text-transform: uppercase;
  -webkit-text-stroke-color: var(--color-black);
  color: black;
  letter-spacing: 2px;
  padding: 5px 0;
  line-height: 1;
  margin: 0;

  @media(min-width: 768px) {
    font-size: var(--h3-font-size);
    color: transparent;
    -webkit-text-stroke-width: 2px;
  }
`;

const RadioList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 2rem;
`;

const RadioListItem = styled.li`
  padding: 0;
  margin: 0;
`;

const LiveRadio = (props) => {
  return (
    <LiveRadioWrapper>
      <LiveRadioContainer>
        <RadioTitle>Live</RadioTitle>
        <RadioList>
          {
            props.liveItems.map((liveItem) => {
              return (
                <RadioListItem>{liveItem}</RadioListItem>
              )
            })
          }
        </RadioList>
        <RadioTitle>Radio</RadioTitle>
        <RadioList>
          {
            props.radioItems.map((radioItem) => {
              return (
                <RadioListItem>{radioItem}</RadioListItem>
              )
            })
          }
        </RadioList>
      </LiveRadioContainer>
    </LiveRadioWrapper>
  )
}

const Info = () => {
  return (
    <InfoWrapper>
      <InfoContainer>
        <p>Real earnest fan of good music and cool things. Producer, writer, strategist, artist-helper, thinker, maker for hire. </p>
        <p>Contact: <a href="mailto:nazukkochhar@gmail.com">nazukkochhar@gmail.com</a></p>
        <p>Resume available upon request. </p>
      </InfoContainer>
    </InfoWrapper>
  )
}

const Page404 = () => {
  return (
    <Page404Wrapper>
      <h1>4🤬4</h1>
    </Page404Wrapper>
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
  align-items: flex-start;
  flex-direction: column;
  background: var(--color-neon-green);
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
    position: fixed;
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
  }
`;

const NavLogoWrapper = styled.div`
  z-index: 10;
  top: 1.953rem;
  position: fixed;
  left: 50%;
  transform: ${props => props.fadeIn ? 'translate(-50%, 0%)' : 'translate(-50%, 20px)'};
  transition: all 1.6s cubic-bezier(.075,.82,.165,1);
  opacity: ${props => props.fadeIn ? '1' : '0'};

  @media (min-width: 768px) {
    transform: ${props => props.fadeIn && !props.moveLeft ? 'translate(-50%, 0%)' : ( props.fadeIn && props.moveLeft ? 'translate(calc(-50vw + 10vw + 3rem), 0%)' : 'translate(-50%, 20px)') };
  }
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
      writingLoaded: false,
      videoLoaded: false,
      fashionLoaded: false,
      liveRadioLoaded: false,
      ssLoaded: false,
      infoLoaded: false,
      loaded: false,
      menuOpen: false,
      onInfoPage: false,
      writingArticles: [],
      videos: [],
      fashionArticles: [],
      liveItems: [],
      radioItems: []
    }
  }

  componentDidMount() {
    let _this = this;
    fetch('/pages/writing.json')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let articles = json.map((jsonItem) => {
          let article = {};
          article['title'] = jsonItem['title'];
          article['type'] = jsonItem['type'];
          article['publication'] = jsonItem['publication'];
          article['date'] = jsonItem['date'];
          article['image'] = jsonItem['image'];
          article['link'] = jsonItem['link'];

          return article;
        });

        _this.setState({
          writingArticles: articles ,
          writingLoaded: true
        });

        _this.checkLoading();
      });

    fetch('/pages/video.json')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let videos = json.map((jsonItem) => {
          let video = {};
          video['title'] = jsonItem['title'];
          video['type'] = jsonItem['type'];
          video['role'] = jsonItem['role'];
          video['text'] = jsonItem['text'];
          video['publication'] = jsonItem['publication'];
          video['date'] = jsonItem['date'];
          video['link'] = jsonItem['link'];

          return video;
        });

        _this.setState({
          videos: videos,
          videoLoaded: true
        });

        _this.checkLoading();
      });

    fetch('/pages/fashion.json')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let fashionArticles = json.map((jsonItem) => {
          let fashionArticle = {};
          fashionArticle['title'] = jsonItem['title'];
          fashionArticle['type'] = jsonItem['type'];
          fashionArticle['role'] = jsonItem['role'];
          fashionArticle['publication'] = jsonItem['publication'];
          fashionArticle['date'] = jsonItem['date'];
          fashionArticle['image'] = jsonItem['image'];
          fashionArticle['link'] = jsonItem['link'];

          return fashionArticle;
        });

        _this.setState({
          fashionArticles: fashionArticles,
          fashionLoaded: true
        });

        _this.checkLoading();
      });

      fetch('/pages/liveradio.json')
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let liveItems = json['live'].map((jsonItem) => {
          let liveItem = jsonItem['text'];
          return liveItem;
        });

        let radioItems = json['radio'].map((jsonItem) => {
          let radioItem = jsonItem['text'];
          return radioItem;
        });

        _this.setState({
          liveItems: liveItems,
          radioItems: radioItems,
          liveRadioLoaded: true
        });

        _this.checkLoading();
      });


    this.toggleMenu();
    window.addEventListener("resize", this.toggleMenu)
    this.onRouteChanged();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  checkLoading() {
    // this.state.liveLoaded && this.state.ssLoaded && this.infoLoaded
    if (this.state.writingLoaded && this.state.videoLoaded && this.state.fashionLoaded && this.state.liveRadioLoaded) {
      let _this = this;

      setTimeout(() => {
        _this.setState({ loaded: true });
      }, 500)
      
    }
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

  onRouteChanged() {
    this.setState({ onInfoPage: this.props.location.pathname === '/info' })
  }

  render() {
    return (

          <div className="App">
            <AppWrapper menuOpen={this.state.menuOpen}>
                <Loader show={!this.state.loaded}></Loader>
                <HamburgerIconWrapper fadeIn={this.state.loaded}>
                  <HamburgerIcon open={this.state.menuOpen} onClick={e => this.setState({ menuOpen: !this.state.menuOpen })}></HamburgerIcon>
                </HamburgerIconWrapper>
                <NavLinkWrapper fadeIn={this.state.loaded} visible={this.state.menuOpen}>
                  <NavLink onClick={this.closeMenu} to="/writing">Writing</NavLink>
                  <NavLink onClick={this.closeMenu} to="/video">Video</NavLink>
                  <NavLink onClick={this.closeMenu} to="/fashion">Fashion</NavLink>
                  <NavLink onClick={this.closeMenu} to="/live+radio">live + radio</NavLink>
                  <NavLink onClick={this.closeMenu} to="https://www.google.com">s+s</NavLink>
                  <NavLink onClick={this.closeMenu} to="/info">Info</NavLink>
                </NavLinkWrapper>
                <NavLogoWrapper  moveLeft={this.state.onInfoPage} fadeIn={this.state.loaded}>
                  <NavLogo to="/">nazuk</NavLogo>
                </NavLogoWrapper>
              <NavTop fadeIn={this.state.loaded}>
              </NavTop>

              <FadeIn  fadeIn={this.state.loaded}>
                <PoseGroup>
                  <RouteContainer key={this.props.location.pathname}>
                    <Switch location={this.props.location}>
                      <Route path="/" exact component={Index} key="index" exact={true}/>
                      <Route path="/writing/" render={() => <Writing articles={this.state.writingArticles}/>} key="writing" exact={true}/>
                      <Route path="/video/" render={() => <VideoSection videos={this.state.videos}/>} key="video" exact={true}/>
                      <Route path="/fashion/" render={() => <Fashion fashionArticles={this.state.fashionArticles}/>} key="fashion" exact={true}/>
                      <Route path="/live+radio/" render={() => <LiveRadio liveItems={this.state.liveItems} radioItems={this.state.radioItems}/>} key="liveradio" exact={true}/>
                      {/* <Route path="/s+s/" component={SnS} key="sns" exact={true}/> */}
                      <Route path="/info/" component={Info} key="info" exact={true}/>
                      <Route component={Page404}/>
                    </Switch>
                  </RouteContainer>
                </PoseGroup>
              </FadeIn>

            </AppWrapper>
          </div>


    );
  }
}

export default withRouter(App);
