import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

import img9 from '../images/img-9.jpg';
import img4 from '../images/img-4.jpg';
import img3 from '../images/img-3.jpg';
import img6 from '../images/img-6.jpg';
import img7 from '../images/img-7.jpg';
import img8 from '../images/img-8.jpg';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img5 from '../images/img-5.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1 id="about-us">About US</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={img9}
              text="A Photo Of The IFMASA Board Members"
              label='IFMASA Leadership >'
              path='/IFMASA-Leadership'
            />
          </ul>
        </div>
      </div>
      <p>The Institute of Finance Management Academic Staff Assembly in short IFMASA is the....... (Here goes the description about IFMASA in details) </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={img4}
              text="Various members of IFMASA in one of the meetings"
              label='IFMASA Members >'
              path='/IFMASA-Memberprofile'
            />
            <CardItem 
              src={img3}
              text="Various members of IFMASA in one of the meetings"
              label='IFMASA Members >'
              path='/IFMASA-Memberprofile'
            />
          </ul>
        </div>
      </div>
      <p>Another paragraph can go here explaining more about IFMASA</p>
      <p>Please click the images below to see our Products </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={img6}
              text="Here are some of our products"
              label='IFMASA Products >'
              path='/products'
            />
            <CardItem 
              src={img7}
              text="Here are some of our products"
              label='IFMASA Products >'
              path='/products'
            />
            <CardItem 
              src={img8}
              text="Here are some of our products"
              label='IFMASA Products >'
              path='/products'
            />
          </ul>
        </div>
      </div>
      <h1 id="news-letters">News Letters</h1>
      <p>Here goes all the news letters. Their descriptions to be put in length too.</p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src={img1}
              text="Description for latest news"
              label='IFMASA News Letter'
              path='/products' /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src={img2}
              text="Another news description here"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src={img3}
              text="Here goes another news"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src={img4}
              text="Description for another news"
              label='IFMASA News Letter'
              path='/products' /*Have to change this path to go to the specified news location*/
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src={img5}
              text="Another news description here"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src={img6}
              text="Here goes another news"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src={img7}
              text="Here goes another news"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src={img8}
              text="Description for another news"
              label='IFMASA News Letter'
              path='/products' /*Have to change this path to go to the specified news location*/
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
