import React from 'react';
import styled from 'styled-components';

const Pattern = ({component}) => {
  return (
    <StyledWrapper>
      <div className="container" >
        {component}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    background-image: repeating-conic-gradient(
      from 0deg,
      orangered,
      transparent 10deg,
      orange 10deg,
      orangered 20deg
    );
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: orange;
  }`;

export default Pattern;