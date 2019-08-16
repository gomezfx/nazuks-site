import React, { Component } from 'react';
import styled from 'styled-components';

import TwoColumnContainer from '../components/TwoColumnContainer'
import Article from '../components/Article'

const WritingWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

class Writing extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <WritingWrapper>
                    <TwoColumnContainer spacing={'1x'}>
                        
                    </TwoColumnContainer>
                </WritingWrapper>
            </>
        );
    }
}

export default Writing