import React from 'react'
import '../../App.css'
import Footer from '../Footer';
import Prod from '../Prod';


export default function Products() {
    return (
        <div>
           <h1 className='products'>PRODUCTS</h1>
           <Prod />
           <Footer />
        </div>
    );
}