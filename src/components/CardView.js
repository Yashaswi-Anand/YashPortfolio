import React from 'react';
import styled from 'styled-components';

const CardView = ({ item }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="img">
          <img className='image-style' src={item.logo} alt="img" />
        </div>
        <div className="textBox">
          <p className='p'> {item.degree}</p>
          <p className='p'> {item.institution}</p>
          <p className='p'> {item.date}</p>
          <p className='p'> {item.grade}</p>
          <p className="p">{item.branch}</p>
          <p className="p">{item.description}</p>
          <div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 100%;
    background:rgb(74, 74, 74);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
    backdrop-filter: blur(10px);
    transition: 0.5s ease-in-out;
    margin-bottom: 10px;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .card:hover {
    cursor: pointer;
    transform: scale(1.05);
    margin-top: 10px !important;
  }

  .img {
    width: 200px;
    height: 180px;
    margin-left: 20px;
    border-radius: 10px;
    background: linear-gradient(#d7cfcf, #9198e5);

    @media (max-width: 768px) {
      margin-left: 0;
      width: 100%;
      height: 250px;
    }
  }

  .image-style {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .card:hover > .img {
    transition: 0.5s ease-in-out;
    background: linear-gradient(#9198e5, #712020);
  }

  .textBox {
    width: calc(100% - 90px);
    margin-left: 10px;
    color: white !important;
    font-family: 'Poppins' sans-serif;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .textContent {
    display: flex;
    align-items: center;
    justify-content: space-start;
  }

  .span {
    font-size: 10px;
  }

  .h1 {
    font-size: 16px;
    font-weight: bold;
  }

  .p {
    font-size: 14px;
    font-weight: lighter;
    color: white !important;
    white-space: normal;
    overflow-wrap: break-word;
    padding: 0 10px;
  }`;

export default CardView