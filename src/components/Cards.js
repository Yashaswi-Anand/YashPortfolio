import styled from 'styled-components';

const Cards = ({ data }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <div style={{ padding: 10 }}>
                <img
                  src={data.image}
                  alt="Card"
                  width={'100%'} height={305}
                  style={{ objectFit: 'fill' }}
                />
              </div>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle">
              </div>
              <div className="circle" id="right">
              </div>
              <div className="circle" id="bottom">
              </div>
            </div>
            <div className="front-content">
              <div>
                <small className="badge" style={{ color: 'lightblue', fontWeight: 'bold' }}>{data.project_name}</small>
                <div className='m-t-10 content-text'>{data.content}</div>
                <p className='m-t-10' style={{ fontSize: 16, marginLeft: 10, fontWeight: 'bold', color: 'lightblue' }}>Technologies Used:</p>
                <div className='m-t-10 content-text'>{data.technologies}</div>
              </div>
              <div className="description">
                <div className="title">
                  <svg className='badge' fillRule="nonzero" height="15px" width="15px" viewBox="0,0,256,256" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset={0} strokeDasharray strokeMiterlimit={10} strokeLinejoin="miter" strokeLinecap="butt" strokeWidth={1} stroke="none" fillRule="nonzero" fill="#20c997"><g transform="scale(8,8)"><path d="M25,27l-9,-6.75l-9,6.75v-23h18z" /></g></g></svg>
                  <div>
                    {data.github && (
                      <a href={data.github} target="_blank" rel="noopener noreferrer" className="badge project-link">
                        Github
                      </a>
                    )}
                    {data.live && (
                      <a href={data.live} target="_blank" rel="noopener noreferrer" className="badge project-link">
                        Live
                      </a>
                    )}
                  </div>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    overflow: visible;
    width: 420px;
    height: 320px;
  }

  @media (max-width: 500px) {
    .card {
      width: 350px;
      height: 320px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 300ms;
    box-shadow: 0px 0px 10px 1px #000000ee;
    border-radius: 5px;
  }

  .content-text {
    padding: 5px 40px 5px 10px;
    text-align: justify;
    font-size: 14px;
  }

  .front, .back {
    background-color: #151515;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    border-radius: 5px;
    overflow: hidden;
  }

  .back {
    width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .back::before {
    position: absolute;
    content: ' ';
    display: block;
    width: 160px;
    height: 160%;
    background: linear-gradient(90deg, transparent, #ff9966, #ff9966, #ff9966, #ff9966, transparent);
    animation: rotation_481 5000ms infinite linear;
  }

  .back-content {
    position: absolute;
    width: 99%;
    height: 99%;
    background-color: #151515;
    border-radius: 5px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  @keyframes rotation_481 {
    0% {
      transform: rotateZ(0deg);
    }

    0% {
      transform: rotateZ(360deg);
    }
  }

  .front {
    transform: rotateY(180deg);
    color: white;
  }

  .front .front-content {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .front-content .badge {
    background-color: #00000055;
    padding: 2px 10px;
    border-radius: 10px;
    backdrop-filter: blur(2px);
    width: fit-content;
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
  }

  .description {
    box-shadow: 0px 0px 10px 5px #00000088;
    width: 100%;
    padding: 10px;
    background-color: #00000099;
    backdrop-filter: blur(5px);
    border-radius: 5px;
  }

  .title {
    font-size: 11px;
    max-width: 90%;
    display: flex;
    justify-content: start;
    gap: 10px;
  }

  .title p {
    width: 50%;
  }

  .project-link {
    color: #ffffff88;
    font-size: 14px;
    cursor: pointer;
  }
  
  .project-link:hover {
    color: #ffffff;
    text-decoration: underline;
  }

  .front .img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .circle {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #ffbb66;
    position: relative;
    filter: blur(15px);
    animation: floating 2600ms infinite linear;
  }

  #bottom {
    background-color: #ff8866;
    left: 50px;
    top: 0px;
    width: 150px;
    height: 150px;
    animation-delay: -800ms;
  }

  #right {
    background-color: #ff2233;
    left: 160px;
    top: -80px;
    width: 30px;
    height: 30px;
    animation-delay: -1800ms;
  }

  @keyframes floating {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0px);
    }
  }`;

export default Cards;
