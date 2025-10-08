import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

const Introduction_Algorithms_And_Analysis = require('../assets/achivement/Introduction_Algorithms_And_Analysis.jpg');
const Python = require('../assets/achivement/Python.jpg');
const Liveasy_internship = require('../assets/achivement/LiveasyInternshipCertificate.jpg');
const dsa_java = require('../assets/achivement/NPTEL20CS85S81990306201424.jpg');
const codeKaze = require('../assets/achivement/codekaze.png');
const tcs_nqt = require('../assets/achivement/tcs_nqt.png');
const nodejs_cerificate = require('../assets/achivement/nodejs_certificate.png');
const gate_score = require('../assets/achivement/gate_score.png');

// Card Component
const CardView = ({ item }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="img">
          <img className="image-style" src={item.logo} alt={item.title} />
        </div>
        <div className="textBox">
          <p className="title">{item.title} - {item.date}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

function Achivement() {
  const carouselRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate item width dynamically or set a fixed value
      // For simplicity, let's assume all items have the same width as the first child
      if (carouselRef.current.children.length > 0) {
        setItemWidth(carouselRef.current.children[0].offsetWidth + 16); // 16px for gap
      }

      const scrollInterval = setInterval(() => {
        setScrollPosition((prevPos) => {
          const newPos = prevPos + itemWidth;
          if (newPos >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
            // Reset to start or loop smoothly
            return 0;
          }
          return newPos;
        });
      }, 3000); // Scroll every 3 seconds

      return () => clearInterval(scrollInterval);
    }
  }, [itemWidth]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [scrollPosition]);

  const achievements_date = [
    { title: "Gate Score", date: "2025", logo: gate_score },
    { title: "Excellence in NodeJs", date: "2022", logo: nodejs_cerificate },
    { title: "CodeKaze Certificate", date: "2022", logo: codeKaze },
    { title: "Introduction to Algorithms and Analysis", date: "2021", logo: Introduction_Algorithms_And_Analysis },
    { title: "Liveasy Internship", date: "2021", logo: Liveasy_internship },
    { title: "TCS NQT Score Card", date: "2021", logo: tcs_nqt },
    { title: "Data Structure and Algorithm in Java", date: "2020", logo: dsa_java },
    { title: "Python Programming", date: "2019", logo: Python },
  ];

  return (
    <div className="section-screen">
      <div className="d-flex justify-center align-center g-10" style={{ marginBottom: "1rem" }}>
        <FontAwesomeIcon icon={faTrophy} style={{ fontSize: '2.8rem', marginRight: "0.5rem" }} />
        <h1>Achievements</h1>
      </div>
      <CarouselWrapper ref={carouselRef}>
        {achievements_date.map((item, index) => (
          <CardView item={item} key={index} />
        ))}
      </CarouselWrapper>
    </div>
  );
}

export default Achivement;

const StyledWrapper = styled.div`
  flex: 0 0 auto;
  scroll-snap-align: start;
  width: 75vw; /* responsive width */

  @media (min-width: 768px) {
    width: 300px; /* fixed width on tablet/desktop */
  }

  .card {
    // background: #2e2e2e;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .card:hover {
    transform: scale(1.03);
  }

  .img {
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    background-color: #444;
    border-radius: 10px;
  }

  .image-style {
    width: 100%;
    height: 100%;
    // object-fit: cover !important; 
    display: block;
    border-radius: 10px;
  }

  .textBox {
    padding: 0.1rem 0.5rem;
    color: white;
    display: flex;
    gap: 0.5rem;
  }

  .title {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden; /* Hide scrollbar and prevent manual scrolling */
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;

  /* Remove scroll-snap-type and scroll-behavior as they might conflict with programmatic scrolling */
  /* scroll-snap-type: x mandatory; */
  /* scroll-behavior: smooth; */

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-snap-type: none;
    gap: 1.25rem;
  }
`;
