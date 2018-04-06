import React from 'react';
import styled from 'styled-components';

import Wrapper from './AppPrimatives/Wrapper';

import ProjectList from './ProjectList';

export default () => {
  const Title = styled.h1`
  display: flex;
  justify-content: center;
  border-top: solid thick #2176AE;
  border-bottom: solid thick #2176AE;
  border-width: 10px;
  width: 100%;
  color: #FBB13C;
  font-size: 10rem;
`

    return (
      <Wrapper>
        <Title> My Sad Application </Title>
        <ProjectList />

        
      </Wrapper>
    );
  
}