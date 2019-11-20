import React, { Component } from 'react';
import styled from 'styled-components';

import Video from '../components/Video'

import { graphql } from "gatsby"

const VideoWrapper =  styled.div`
    position: relative;
    //display: flex;
    //align-items: flex-start;
    //justify-content: space-between;
    //flex-wrap: wrap;
    margin: 0 auto;
    padding-bottom: calc(200px + 3rem);

    @media (min-width: 768px) {
      width: 70%;
    }
`;

const VideoItem = styled.div`

`;

const Col = styled.div`
  width: 100%;

  > ${VideoItem}:first-child {
    margin-top: 0;
  }
  
  > ${VideoItem} {
    margin-top: calc(200px + 3rem);
    margin-left: auto;
    margin-right: auto;
    width: 100%;

    @media (min-width: 768px) {
      width: 70%;
    }
  }
`;


const VideoPage = ({data}) => {
    const { edges } = data.allMarkdownRemark

    return (
        <>
            <VideoWrapper>
                <Col>
                    {
                        edges.sort((x,y) => new Date(y.node.frontmatter.date) - new Date(x.node.frontmatter.date)).map(edge => {
                            return <VideoItem key={'vi' + edge.node.id}>
                                        <Video
                                            key={edge.node.id}
                                            title={edge.node.frontmatter.title}
                                            image={edge.node.frontmatter.image}
                                            date={edge.node.frontmatter.date}
                                            role={edge.node.frontmatter.role}
                                            type={edge.node.frontmatter.type}
                                            link={edge.node.frontmatter.link}>
                                        </Video>
                                    </VideoItem>
                        })
                    }
                </Col>
            </VideoWrapper>
        </>
    )
}

export default VideoPage

export const pageQuery = graphql`
    query videoOnly {
        allMarkdownRemark(filter: { collection: { eq: "markdown-pages-video" } }) {
            edges {
                node {
                    id
                    collection
                        frontmatter {
                            title
                            image
                            date
                            type
                            role
                            link
                        }
                }
            }
        }
    }
`