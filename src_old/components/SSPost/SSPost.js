import React, { Component } from 'react';
import styled from 'styled-components'
import Waypoint from "react-waypoint";

const StyledSSPost = styled.div`
  cursor: pointer;
  transition-delay: .6s;
  transform-origin: top center;
  opacity: ${props => props.visible ? '1' : '0'};
  transform: ${props => props.visible ? 'perspective(1000px) rotateX(0)' : 'perspective(1000px) rotateX(-90deg)'};
  transition: transform 1.6s cubic-bezier(.075,.82,.165,1),opacity .3s cubic-bezier(.075,.82,.165,1);  
`;

class SSPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      revealed: false   
    }
  }

  reveal() {
      console.log('reveal');
    setTimeout(() => {
      this.setState({ revealed: true });
    }, 0);
  }

  render() {
    return (
      <Waypoint onEnter={() => this.reveal()}>
          <div>
            <StyledSSPost visible={this.state.revealed}>
                <iframe width="100%" height="180" scrolling="no" frameborder="no" allow="autoplay" src={this.props.soundcloudSrc}></iframe>
            </StyledSSPost>
          </div>
      </Waypoint>
    );
  }
}

export default SSPost;