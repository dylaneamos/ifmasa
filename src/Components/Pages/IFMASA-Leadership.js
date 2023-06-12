import React from 'react';
import '../../App.css';
import './IFMASA_Leadership.css';
import presidentPhoto from './images/img-6.jpg';
import vicePresidentPhoto from './images/img-7.jpg';
import boardMember1Photo from './images/img-8.jpg';
import boardMember2Photo from './images/img-3.jpg';
import boardMember3Photo from './images/img-5.jpg';
import boardMember4Photo from './images/img-9.jpg';
import boardMember5Photo from './images/img-2.jpg';
import Footer from '../Footer';

export default function IFMASA_Leadership() {
  return (
    <div className='IFMASA-Leadership-container'>
      <h1 className='IFMASA_Leadership'>IFMASA Leadership</h1>

      <p className='ifmasa-leadership-paragraph'>
        Here you can find information about the IFMASA leadership. 
      </p><br /><br />

      <h2 className='IFMASA-Leadership-subtitle'>President</h2>
      <div className='ifmasa-leadership-member'>
        <img src={presidentPhoto} alt='President' className='IFMASA-Leadership-photo' />
        <p>Name: John Doe</p>
        <p>Position: President</p>
        <p>Education: XYZ University</p>
      </div><br /><br /><br />
  
        <h2 className='IFMASA-Leadership-subtitle'>Vice President</h2>
        <div>
          <img src={vicePresidentPhoto} alt='Vice President' className='IFMASA-Leadership-photo' />
          <p>Name: Jane Smith</p>
          <p>Position: Vice President</p>
          <p>Education: ABC University</p>
        </div><br /><br /><br />
  
        <h2 className='IFMASA-Leadership-subtitle'>Board Members</h2>
        <div>
          <img src={boardMember1Photo} alt='Board Member 1' className='IFMASA-Leadership-photo' />
          <p>Name: John Smith</p>
          <p>Position: Board Member</p>
          <p>Education: DEF University</p>
        </div><br />
        <div>
          <img src={boardMember2Photo} alt='Board Member 2' className='IFMASA-Leadership-photo' />
          <p>Name: Sarah Johnson</p>
          <p>Position: Board Member</p>
          <p>Education: GHI University</p>
        </div><br />
        <div>
          <img src={boardMember3Photo} alt='Board Member 3' className='IFMASA-Leadership-photo' />
          <p>Name: Michael Brown</p>
          <p>Position: Board Member</p>
          <p>Education: JKL University</p>
        </div><br />
        <div>
          <img src={boardMember4Photo} alt='Board Member 4' className='IFMASA-Leadership-photo' />
          <p>Name: Emily Davis</p>
          <p>Position: Board Member</p>
          <p>Education: MNO University</p>
        </div><br />
        <div>
          <img src={boardMember5Photo} alt='Board Member 5' className='IFMASA-Leadership-photo' />
          <p>Name: David Wilson</p>
          <p>Position: Board Member</p>
          <p>Education: PQR University</p>
        </div><br /><br />
        <Footer />
      </div>
    );
}
  