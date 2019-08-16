import React, { Component } from 'react';
import styled from 'styled-components';

const IconWrapper = styled.div`
  width: 30px;
  position: relative;
  height: 18px;
  cursor: pointer;
`;

const StyledLine = styled.div`
  margin-top: 7px;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #000000;
  top: 0;
  transition: all 1.6s cubic-bezier(.075,.82,.165,1);
  
`;

const StyledLineTop =  styled(StyledLine)`
  transform: ${props => props.open ? 'translateY(0)' : 'translateY(-7px)'};
`;

const StyledLineBottom =  styled(StyledLine)`
transform: ${props => props.open ? 'translateY(0)' : 'translateY(7px)'};
`;


class HamburgerIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }
  }

  componentDidMount() {

  }

  render() {
    return (
        <IconWrapper onClick={this.props.onClick}>
          <StyledLineTop open={this.props.open}></StyledLineTop>
          <StyledLine></StyledLine>
          <StyledLineBottom open={this.props.open}></StyledLineBottom>
        </IconWrapper>
    );
  }
}

export default HamburgerIcon
