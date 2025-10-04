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
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: left;
    transition: all 0.3s ease;
    margin-bottom: 20px;
    flex-direction: row;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.8s ease;
  }

  .card:hover::before {
    left: 100%;
  }

  .card:hover {
    cursor: pointer;
    transform: translateY(-5px) scale(1.02);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(78, 205, 196, 0.3);
    box-shadow: 0 15px 40px rgba(78, 205, 196, 0.1);
  }

  .img {
    width: 200px;
    height: 180px;
    margin-left: 20px;
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
      margin-left: 0;
      width: calc(100% - 40px);
      height: 200px;
      margin: 20px;
    }
  }

  .image-style {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  .card:hover > .img {
    background: rgba(78, 205, 196, 0.1);
    border-color: rgba(78, 205, 196, 0.3);
    transform: scale(1.05);
  }

  .card:hover .image-style {
    transform: scale(1.1);
    filter: brightness(1.1);
  }

  .textBox {
    width: calc(100% - 90px);
    margin-left: 20px;
    color: white !important;
    font-family: 'Poppins', sans-serif;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      width: calc(100% - 40px);
      margin: 0 20px 20px 20px;
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
    font-weight: 400;
    color: rgba(255, 255, 255, 0.9) !important;
    white-space: normal;
    overflow-wrap: break-word;
    padding: 2px 10px;
    margin: 5px 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    line-height: 1.4;
  }

  .p:first-child {
    font-size: 18px;
    font-weight: 600;
    color: #4ecdc4 !important;
    margin-bottom: 8px;
  }

  .p:nth-child(2) {
    font-size: 16px;
    font-weight: 500;
    color: #ffffff !important;
    margin-bottom: 6px;
  }`;

export default CardView