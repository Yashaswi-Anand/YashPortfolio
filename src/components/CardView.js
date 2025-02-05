import React from 'react';
import styled from 'styled-components';

const CardView = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="img" />
                <div className="textBox">
                    <p className='p'> Xhattmahs</p>
                    <p className='p'> Xhattmahs</p>
                    <p className='p'> Xhattmahs</p>
                    <p className='p'> Xhattmahs</p>
                    <p className="p">Xhattmahs is not attacking your base!</p>
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
    height: 200px;
    background: #353535;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
    backdrop-filter: blur(10px);
    transition: 0.5s ease-in-out;
  }

  .card:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .img {
    width: 150px;
    height: 150px;
    margin-left: 20px;
    border-radius: 10px;
    background: linear-gradient(#d7cfcf, #9198e5);
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
    font-size: 12px;
    font-weight: lighter;
  }`;

export default CardView