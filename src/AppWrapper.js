import React, { Component } from 'react';
import styled from 'styled-components'

import Loader from './components/Loader';
import HamburgerIcon from './components/HamburgerIcon';
import NavLink from './components/NavLink';
import NavLogo from './components/NavLogo';

const StyledAppWrapper = styled.div`
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

const StyledHamburgerIconWrapper = styled.div`
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

const StyledNavLinkWrapper = styled.div`
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

const StyledNavLogoWrapper = styled.div`
  z-index: 10;
  top: 1.953rem;
  position: fixed;
  left: 50%;
  transform: ${props => props.fadeIn ? 'translate(-50%, 0%)' : 'translate(-50%, 20px)'};
  transition: all 1.6s cubic-bezier(.075,.82,.165,1);
  opacity: ${props => props.fadeIn ? '1' : '0'};
  @media (min-width: 768px) {
    transform: ${props => props.fadeIn && !props.moveLeft ? 'translate(-50%, 0%)' : (props.fadeIn && props.moveLeft ? 'translate(calc(-50vw + 3rem + ' + props.offset + 'px), 0%)' : 'translate(-50%, 20px)')};
  }
`;

class AppWrapper extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false,
            loaded: true,
            logoOffset: 0,
            onInfoPage: false
        }
    }

    componentDidMount() {
        let _this = this;

        let onResize = () => {
            let offset = 0;
            if (window.innerWidth > 1680) {
                offset = (window.innerWidth - 1680) / 2 + (1680 * .10);
            } else {
                offset = window.innerWidth * .10;
            }

            _this.setState({
                logoOffset: offset
            });
        };

        window.onresize = onResize;

        onResize();


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
            <>
                <StyledAppWrapper menuOpen={this.state.menuOpen}>
                    <Loader show={!this.state.loaded}></Loader>
                    <StyledHamburgerIconWrapper fadeIn={this.state.loaded}>
                        <HamburgerIcon open={this.state.menuOpen} onClick={e => this.setState({ menuOpen: !this.state.menuOpen })}></HamburgerIcon>
                    </StyledHamburgerIconWrapper>
                    <StyledNavLinkWrapper fadeIn={this.state.loaded} visible={this.state.menuOpen}>
                        <NavLink onClick={this.closeMenu} to="/writing">Writing</NavLink>
                        {/* <NavLink onClick={this.closeMenu} to="/video">Video</NavLink>
                        <NavLink onClick={this.closeMenu} to="/fashion">Fashion</NavLink>
                        <NavLink onClick={this.closeMenu} to="/live+radio">live + radio</NavLink>
                        <NavLink onClick={this.closeMenu} to="/s+s">s+s</NavLink>
                        <NavLink onClick={this.closeMenu} to="/info">Info</NavLink> */}
                    </StyledNavLinkWrapper>
                    {this.props.children}
                </StyledAppWrapper>
                <StyledNavLogoWrapper offset={this.state.logoOffset} moveLeft={this.state.onInfoPage} fadeIn={this.state.loaded}>
                    <NavLogo onClick={this.closeMenu} to="/">nazuk</NavLogo>
                </StyledNavLogoWrapper>
            </>
        );
    }
}

export default AppWrapper





