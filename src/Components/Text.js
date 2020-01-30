import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  alignItems: ${(props) => props.align || 'baseline'};
  width: ${(props) => props.ellipsis ? '100%' : ''};
`
const TextStyle = styled.p`
    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight};
    font-family: 'Roboto';
    color: ${(props) => props.color};
`
function Text ({ fontSize, color, text, fontWeight, align, ellipsis }) {
    return (
        <Container align={align || 'baseline'} ellipsis={ellipsis}>
            <TextStyle color={color} fontWeight={fontWeight} fontSize={fontSize}>{text}</TextStyle>
        </Container>
    );
}

export default Text;
