import React from "react"
import styled from "styled-components";

const StyledBlogPreview = styled.div`
    background: red;
    padding: 20px;
`;

class BlogPreview extends React.Component {
    render() {
        return (
            <StyledBlogPreview>
                <h1>Hello, {this.props.name}</h1>;
            </StyledBlogPreview>
        )

    }
}

export default BlogPreview