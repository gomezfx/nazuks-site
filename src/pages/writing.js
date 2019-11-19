import React, { Component } from 'react';
import styled from 'styled-components';

import TwoColumnContainer from '../components/TwoColumnContainer'
import Article from '../components/Article'

import { graphql } from "gatsby"

const WritingWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Writing = ({data}) => {
    const { edges } = data.allMarkdownRemark
    console.log(edges);
    return (
        <>
            <WritingWrapper>
                <TwoColumnContainer spacing={'1x'}>
                    {
                        edges.sort((x,y) => new Date(y.node.frontmatter.date) - new Date(x.node.frontmatter.date)).map(edge => {
                            return <Article
                                        key={edge.node.id}
                                        type={edge.node.frontmatter.type}
                                        title={edge.node.frontmatter.title}
                                        image={edge.node.frontmatter.image}
                                        date={edge.node.frontmatter.date}
                                        link={edge.node.frontmatter.link}
                                        publication={edge.node.frontmatter.publication}
                                    ></Article>
                        })
                    }
                </TwoColumnContainer>
            </WritingWrapper>
        </>
    )
}

export default Writing

export const pageQuery = graphql`
    query writingOnly {
        allMarkdownRemark(filter: { collection: { eq: "markdown-pages-writing" } }) {
            edges {
                node {
                    id
                    collection
                        frontmatter {
                            type
                            title
                            image
                            date
                            link
                            publication
                        }
                }
            }
        }
    }
`