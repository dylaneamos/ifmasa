import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import Member from '../Member';


export default function IFMASA_Memberprofile() {
    return (
        <div>
            <h1 className='IFMASA-Memberprofile'>IFMASA Member's Profile</h1>
            <Member />
            <Footer />
       </div>
    );
}