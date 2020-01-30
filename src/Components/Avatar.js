import React from 'react';
import styled from 'styled-components';

const Container = styled.img`
    height: ${(props) => props.height || '50'}px;
    width: ${(props) => props.height || '50'}px;
    vertical-align: middle;
    border-radius: 50%;
`

function Avatar ({ height, source }) {
    return (
        <Container height={height} src={source} />
    );
}

export default Avatar;
