import React, { Component } from 'react';
import styled from 'styled-components';

import TwoColumnContainer from '../components/TwoColumnContainer'
import Article from '../components/Article'

import { graphql } from "gatsby"

const FashionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const Fashion = ({data}) => {
    const { edges } = data.allMarkdownRemark

    return (
        <>
            <FashionWrapper>
                <TwoColumnContainer spacing={'2x'}>
                    {
                        edges.sort((x,y) => new Date(y.node.frontmatter.date) - new Date(x.node.frontmatter.date)).map(edge => {
                            return <Article
                                        aspectRatio="portrait"
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
            </FashionWrapper>
        </>
    )
}

export default Fashion

export const pageQuery = graphql`
    query fashionOnly {
        allMarkdownRemark(filter: { collection: { eq: "markdown-pages-fashion" } }) {
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
                            role
                        }
                }
            }
        }
    }
`