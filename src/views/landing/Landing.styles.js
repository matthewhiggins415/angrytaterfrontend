import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import background from "../../assets/taterhero.png";
import potatoone from '../../assets/potato1.png';
import potatotwo from '../../assets/potato2.png';
import potatothree from '../../assets/potato3.png';
import potatobox from '../../assets/potato_box.png';
import potatomeme from '../../assets/potatomeme.jpg';

export const LandingContainer = styled.div`
  background-image: url(${background});
  background-size: max(50vw, 300px);
  background-position: center;
  width: 100%;
  min-height: 80vh;
  background-color: rgba(255, 215, 42, 0.8);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  animation: wavey 3s infinite ease-in-out;
  position: relative;
  z-index: 1;

  /* Responsive styles for mobile */
  @media (max-width: 768px) {
    background-size: cover; /* Ensures the image covers the entire background */
    background-position: top; /* Adjusts positioning */
    max-height: 60vh; /* Reduce height for smaller screens */
    padding: 20px; /* Adds padding for spacing */
  }

  @media (max-width: 480px) {
    background-size: cover; /* Adjust for very small screens */
    min-height: 50vh; /* Reduce height further */
    padding: 15px;
  }
`;

export const HeroContainer = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const HeroTag = styled.h1`
  color: black;
  font-size: 100px;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.9);
  /* border: 2px solid red; */

  @media (max-width: 768px) {
    font-size: 3em;
    width: 100%;
  }
`
export const InfoSection = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  padding: 20px; 

  h1 {
    font-size: 3em;
    text-align: center;
    margin: 0px;
    padding: 0px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2em;
      margin-top: 20px;
    }
  }
`;

export const ImgSection = styled.div`
  width: 100%;
  min-height: 50vh;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: #47fff9;
  padding: 15px;
`

export const ImgOne = styled.div`
  background-image: url(${potatoone});
  background-size: max(400px, 300px);
  background-position: center -150px;
  background-repeat: no-repeat;
  background-color: #fc6ffc;
  width: 400px;
  height: 300px;
  border: 3px solid black;
  margin: 15px;
  border-radius: 20px;
`

export const ImgTwo = styled.div`
  background-image: url(${potatotwo});
  background-size: max(400px, 300px);
  background-position: center -150px;
  background-repeat: no-repeat;
  background-color: white;
  width: 400px;
  height: 300px;
  border: 3px solid black;
  margin: 15px;
  border-radius: 20px;
`

export const ImgThree = styled.div`
  background-image: url(${potatothree});
  background-size: max(400px, 300px);
  background-position: center;
  background-repeat: no-repeat;
  background-color: #80fc6f;
  width: 400px;
  height: 300px;
  border: 3px solid black;
  margin: 15px;
  border-radius: 20px;
`

/* Glow Animation */
const pulseGlow = keyframes`
  0% {
    box-shadow: 0px 0px 10px rgba(255, 87, 51, 0.8);
  }
  50% {
    box-shadow: 0px 0px 20px rgba(255, 87, 51, 1);
  }
  100% {
    box-shadow: 0px 0px 10px rgba(255, 87, 51, 0.8);
  }
`;

/* Button Hover Effect */
const shimmer = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const AnimatedButton = styled.button`
  background-color: #ff5733;
  color: white;
  font-size: 40px;
  padding: 30px 60px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  animation: ${pulseGlow} 1.5s infinite alternate, ${shimmer} 2s infinite ease-in-out;
  width: auto;
  margin: 0 auto;
  display: block;
  z-index: 1;
  margin-bottom: 20px;

  &:hover {
    background-color: #ff2e00;
    transform: scale(1.1);
    box-shadow: 0px 4px 25px rgba(255, 87, 51, 1);
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    left: 100%;
  }

  /* Optional: Responsive tweaks for smaller screens */
  @media (max-width: 768px) {
    font-size: 30px;
    padding: 15px 30px;
    width: 90%;
    max-width: 400px;
  }
`;

export const PotatoBoxSection = styled.div`
  width: 100%;
  height: 45vh;
  background-image: url(${potatobox});
  background-size: max(400px, 300px);
  background-position: center;
  background-repeat: no-repeat;
  /* transform: translateY(-50px); Moves the section up by 20px */
`;

export const PotatoMemeSection = styled.div`
  width: 100%;
  min-height: 500px;
  background-image: url(${potatomeme});
  background-position: center;
  background-repeat: no-repeat;
`;

export const Span = styled.span`
  color: red;
`