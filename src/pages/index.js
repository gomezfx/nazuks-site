import React from 'react';
import posed, { PoseGroup } from 'react-pose';
import styled from 'styled-components';

const PosedEmoji = posed.div({
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { delay: 1000 }
    }
});

const Emoji = styled.div`
    font-size: 100px;
    transition: transform 1s ease-in-out;
    &:hover {
        transform: rotate(360deg);
    }
`;

const IndexWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default () => (
    <>
        <IndexWrapper>
            <PosedEmoji><Emoji>🤑</Emoji></PosedEmoji>
        </IndexWrapper>
    </>
)
