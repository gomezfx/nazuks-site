import React from 'react';
import AppWrapper from './src/AppWrapper'
import './src/index.css';

export const wrapPageElement = ({ element, props }) => (
    <AppWrapper {...props}>{element}</AppWrapper>
);