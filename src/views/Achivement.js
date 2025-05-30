import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
const Introduction_Algorithms_And_Analysis = require('../assets/achivement/Introduction_Algorithms_And_Analysis.jpg')
const Python = require('../assets/achivement/Python.jpg')
const Liveasy_internship = require('../assets/achivement/LiveasyInternshipCertificate.jpg')
const dsa_java = require('../assets/achivement/NPTEL20CS85S81990306201424.jpg')


// Component to render each card
const CardView = ({ item }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="img">
                    <img className='image-style' src={item.logo} alt="img" />
                </div>
                <div className="textBox">
                    <p className='p'> {item.title}</p>
                    <p className='p'> {item.date}</p>
                </div>
            </div>
        </StyledWrapper>
    );
}

function Achivement() {
    const achievements_date = [
        {
            title: "Introduction to Algorithms and Analysis",
            date: "2022",
            logo: Introduction_Algorithms_And_Analysis
        },
        {
            title: "Python",
            date: "2022",
            logo: Python
        },
        {
            title: "Liveasy Internship",
            date: "2022",
            logo: Liveasy_internship
        },
        {
            title: "DSA in Java",
            date: "2022",
            logo: dsa_java
        }
    ]
    return (
        <div className='section-screen'>
            <div className='d-flex justify-center align-center g-10'>
                <span><FontAwesomeIcon icon={faBriefcase} /></span><span><h1>Achievements</h1></span>
            </div>
            <CarouselWrapper className="carousel-wrapper">
                {achievements_date.map((item, index) => (
                    <CardView item={item} key={index} />
                ))}
            </CarouselWrapper>
        </div>
    )
}

export default Achivement


const CarouselWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  flex-direction: row;
  gap: 1rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    height: auto;
    max-height: none;
    scroll-snap-type: none;
  }
`;

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
