import React, { Component } from 'react';
import styled from 'styled-components'
import Waypoint from "react-waypoint";

const Description =  styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-family: 'Noto Sanss JP', sans-serif;
  font-weight: 300;
  display: block;
  text-transform: uppercase;
`;

const ImageWrapper = styled.div`
  background: var(--color-black);
  padding-top: ${props => props.landscape ? '56.25%' : '105%'};
  position: relative;
  overflow: hidden;
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


const Title = styled.h2`
  font-size: var(--h4-font-size);
  font-weight: bold;
  text-transform: uppercase;
  -webkit-text-stroke-color: var(--color-black);
  color: black;
  letter-spacing: 2px;
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  padding: 5px 0;
  line-height: 1;
  margin: 0;

  @media(min-width: 768px) {
    font-size: var(--h3-font-size);
    color: transparent;
    -webkit-text-stroke-width: 2px;
  }
`;

const TextWrapper = styled.div`
  word-break: break-word;
  hyphens: auto;
	will-change: transform;

  @media(min-width: 768px) {
    transform: translateY(-50%);
    transition: all .7s cubic-bezier(.075,.82,.165,1);
    position: absolute;
    min-width: 100%;
  }
`;

const ArticleType = styled.div`
  font-size: 1rem;
  transition: all .7s cubic-bezier(.075,.82,.165,1);
  padding: 5px 7px;
  background: var(--color-black);
  display: inline-block;
  text-transform: uppercase;
  color: var(--color-light-gray);
  margin-top: 10px;

  @media(min-width: 768px) {
    marign-top: 0;
  }
`;

const ArticleRole = styled(ArticleType)`
  color: var(--color-black);
  background: transparent;
  display: block;
  padding-left: 0;
  margin: 0;

  @media(min-width: 768px) {
    display: inline-block;
    margin-left: .3rem;
    padding: 5px 7px;
  }
`;

const SubTitle = styled.div`
  font-size: 1rem;
  color: var(--color-black);
  transition: all .7s cubic-bezier(.075,.82,.165,1);
`;

const StyledArticle = styled.section`
  position: relative;
  cursor: pointer;
  transition-delay: .6s;
  transform-origin: top center;
  opacity: 1;
  will-change: transform;
  transform: ${props => props.visible ? 'perspective(1000px) rotateX(0)' : 'perspective(1000px) rotateX(-90deg)'};
  transition: transform 1.6s cubic-bezier(.075,.82,.165,1),opacity .3s cubic-bezier(.075,.82,.165,1);
  
  @media (max-width: 767px) {
    ${Image} {
      background-color: rgba(1, 255, 112, 0);
    }
  }

  @media (min-width: 768px) {
    opacity: ${props => props.visible ? '1' : '0'};

    &:hover {
      z-index: 2;
  
      ${Image} {
        transform: scale(1.2);
        background-color: rgba(1, 255, 112, .15);
      }
  
      ${TextWrapper} {
        transform: scale(1.3) translateY(-50%);
        
        // &:after {
        //   position: absolute;
        //   background: var(--color-white);
        //   left: -1rem;
        //   right: -1rem;
        //   top: -1rem;
        //   bottom: -1rem;
        //   content: '';
        //   z-index: -1;
        //   opacity: .5;
        // }
      }
  
      ${Title} {
        color: black;
        -webkit-text-stroke-width: 1px;
      }
    }
  }
`;

const ImageLoad = styled.img`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
`;

class Article extends Component {
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
    this.setState({ imageLoaded: true });
  }

  handleImageErrored() {

  }

  render() {
    return (
      <Waypoint onEnter={() => this.reveal()}>
          <a href={this.props.link} target="_blank">
          <StyledArticle visible={this.state.revealed}>
            <ImageWrapper landscape={this.props.aspectRatio !== 'portrait' ? true : false}>
              <ImageLoad
                src={this.props.image}
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}>
              </ImageLoad>
              <Image loaded={this.state.imageLoaded} image={this.props.image}></Image>
            </ImageWrapper>
            <TextWrapper>
              <ArticleType>{this.props.type}</ArticleType><ArticleRole>{this.props.role}</ArticleRole>
              <Title>{this.props.title}</Title>
              <SubTitle>{this.props.publication}{this.props.publication && this.props.date ? ', ' : ''}{this.props.date}</SubTitle>
            </TextWrapper>
          </StyledArticle>
          </a>
      </Waypoint>
    );
  }
}

export default Article;