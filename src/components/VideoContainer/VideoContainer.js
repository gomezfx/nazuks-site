import React, { Component } from 'react';
import styled from 'styled-components'
import posed from 'react-pose';
import Waypoint from "react-waypoint";

const VideoWrapper =  styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 200px;
`;

const Scrollable = styled.div`

`;

const StoryItem = styled.div`

`;

const VideoItem = styled.div`

`;

const Col = styled.div`
  width: 100%

  > ${VideoItem}:first-child {
    margin-top: 0;
  }
  
  > ${VideoItem} {
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    width: 70%

    &:nth-child(odd) {
        width: 70%
    }
  }
  
`;

class VideoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <VideoWrapper>
          <Col>
            {this.props.children.map((child) => {
                return <VideoItem>{child}</VideoItem>
            })}
          </Col>
        </VideoWrapper>
    );
  }
}

export default VideoContainer;