import React from 'react';
import Carousel from "react-multi-carousel";

import './program.scss';

import Logo from "../../assets/2032.png";
import Arrow from "../../assets/arrow.png";

const Program = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1920, min: 1440 },
      items: 4.5
    },
    desktop_min: {
      breakpoint: { max: 1440, min: 1024 },
      items: 3.5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5
    }
  };

  const items = [
    {
      text: 'Register your interest',
      color: '#FFFFFF',
      bg: '#000000',
      type: 'text'
    },
    {
      text: 'Applications open in December',
      color: '#000000',
      bg: '#FFFFFF',
      type: 'text'
    },
    {
      text: 'Submit your application',
      color: '#000000',
      bg: '#FFFFFF',
      type: 'text'
    },
    {
      text: 'Assessment',
      color: '#FFFFFF',
      bg: '#F3724A',
      type: 'text'
    },
    {
      text: 'Get invited to our testing days',
      color: '#000000',
      bg: '#FFFFFF',
      type: 'text'
    },
    {
      text: 'Assessment',
      color: '#FFFFFF',
      bg: '#F3724A',
      type: 'text'
    },
    {
      text: 'Qualify for our combines',
      color: '#000000',
      bg: '#FFFFFF',
      type: 'text'
    },
    {
      text: 'Assessment',
      color: '#FFFFFF',
      bg: '#F3724A',
      type: 'text'
    },
    {
      text: 'Confirmation and selection into development program',
      color: '#000000',
      bg: '#FFFFFF',
      type: 'text'
    },
    {
      img: Logo,
      bg: '#FFFFFF',
      type: 'image'
    }
  ]

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      index,
      active,
    } = rest;
    return (
      <button
        className={ active ? 'dots dot-active' : 'dots dot-inactive' }
        onClick={() => onClick()}
      >
        {React.Children[index]}
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return <button onClick={() => onClick()} />;
  };

  return (
    <div className='program-container'>
      <span>You for 2032</span>—Program snapshot
      <div className='program-content is-flex-column'>
        <div className='flex-one'>
          <p>
            The Talent Identification Program—You for 2032—has been designed to
            identify our next generation of elite athletes. The aim is to
            develop and nurture young Queensland talents who have the potential
            to win on the world stage at the 2032 Olympic and Paralympic Games.
          </p>

          <p>
            Athletic ability coupled with a great attitude to excel are the key
            ingredients in this program. Young athletes could be currently
            competing in a sport that isn't part of the Olympic and Paralympic
            Games, but we may identity a sport that's perfect for their athletic
            strengths.
          </p>
        </div>

        <div className='flex-one'>
          <p>
            Those successful in being selected for the program will receive
            substantial training, coaching and development support from state
            and national sporting organisations as well as the Queensland
            Academy of Sport. More details about the program will become
            available to athletes who are selected.
          </p>

          <p>
            Once the application portal opens in January, an assessment process
            will take place, as indicated by the below diagram.
          </p>
        </div>
      </div>
      <div className='program-footer'>
        <Carousel 
          swipeable
          draggable={false}
          showDots
          partialVisible
          responsive={responsive}
          autoPlaySpeed={1000}
          keyBoardControl
          containerClass="carousel-container"
          customTransition="all .5"
          transitionDuration={500}
          customDot={<CustomDot />}
          renderArrowsWhenDisabled
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
            {
              items.map((o, index) => (
                <>
                  <div className='carousel-number'>
                    {index + 1}
                  </div>

                  <div className='is-flex'>
                    <div style={{ backgroundColor: o.bg, color: o.color }} className='carousel-box' key={index}>
                      { o.type === 'text' ?
                        <p>
                          { o.text }
                        </p>
                        :
                        <img src={o.img} alt="" />
                      }
                    </div>

                    { index !== 9 &&
                      <img className='arrow-icon' src={Arrow} alt="" />
                    }
                  </div>
                </>
              ))
            }
        </Carousel>
      </div>
    </div>
  );
};

export default Program;
