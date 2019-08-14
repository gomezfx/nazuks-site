import CMS from "netlify-cms-app"
import React from 'react'
import StyledSheets from './StyledSheets';
import BlogPreview from './previews/BlogPreview';

CMS.registerPreviewTemplate("blog", props => (
    <StyledSheets>
        <BlogPreview {...props} />
    </StyledSheets>
));