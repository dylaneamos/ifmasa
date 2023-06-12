import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1 id="about-us">About US</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
              src="./images/img-9.jpg"
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
              src="./images/img-4.jpg"
              text="Various members of IFMASA in one of the meetings"
              label='IFMASA Members >'
              path='/IFMASA-Memberprofile'
            />
            <CardItem 
              src="./images/img-3.jpg"
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
              src="./images/img-6.jpg"
              text="Here are some of our products"
              label='IFMASA Products >'
              path='/products'
            />
            <CardItem 
              src="./images/img-7.jpg"
              text="Here are some of our products"
              label='IFMASA Products >'
              path='/products'
            />
            <CardItem 
              src="./images/img-8.jpg"
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
              src="./images/img-1.jpg"
              text="Description for latest news"
              label='IFMASA News Letter'
              path='/products' /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src="./images/img-2.jpg"
              text="Another news description here"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src="./images/img-3.jpg"
              text="Here goes another news"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src="./images/img-4.jpg"
              text="Description for another news"
              label='IFMASA News Letter'
              path='/products' /*Have to change this path to go to the specified news location*/
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
              src="./images/img-5.jpg"
              text="Another news description here"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src="./images/img-6.jpg"
              text="Here goes another news"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src="./images/img-7.jpg"
              text="Here goes another news"
              label='IFMASA News Letter'
              path='/products'  /*Have to change this path to go to the specified news location*/
            />
            <CardItem 
              src="./images/img-8.jpg"
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
