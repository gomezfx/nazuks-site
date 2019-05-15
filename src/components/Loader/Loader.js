import React, { Component } from 'react';
import styled from 'styled-components';

const StyledLoader = styled.div`
    position: relative;
    min-height: 100vh;
    min-width: 100vw;
`;

const LoaderIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: ${props => props.show ? '1' : '0'};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    pointer-events: ${props => props.show ? 'auto' : 'none'};
    transition: all 300ms cubic-bezier(.075,.82,.165,1);
`;
const LoaderIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: -moz-linear-gradient(left, #000000 10%, rgba(0, 0, 0, 0) 42%);
    background: -webkit-linear-gradient(left, #000000 10%, rgba(0, 0, 0, 0) 42%);
    background: -o-linear-gradient(left, #000000 10%, rgba(0, 0, 0, 0) 42%);
    background: -ms-linear-gradient(left, #000000 10%, rgba(0, 0, 0, 0) 42%);
    background: linear-gradient(to right, #000000 10%, rgba(0, 0, 0, 0) 42%);
    -webkit-animation: load3 750ms infinite linear;
    animation: load3 750ms infinite linear;
    

    &::before {
        width: 50%;
        height: 50%;
        background: #000000;
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }

    &::after {
        background: var(--color-light-gray);
        width: 60%;
        height: 60%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    @-webkit-keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
        <LoaderIconWrapper show={this.props.show}><LoaderIcon></LoaderIcon></LoaderIconWrapper>
    );
  }
}

export default Loader
