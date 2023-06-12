import React from 'react';
import product1img from '../images/img-1.jpg';
import product2img from '../images/img-2.jpg';
import product3img from '../images/img-3.jpg';
import product4img from '../images/img-4.jpg';
import investment1img from '../images/img-1.jpg';
import investment2img from '../images/img-2.jpg';
import investment3img from '../images/img-8.jpg';
import investment4img from '../images/img-6.jpg';

const Prod = () => {
  return (
    <div>
      <section>
        <br /><br />
        <h2 className='IFMASA-Leadership-subtitle'>Members Books and Publication</h2>
        <div>
          <div>
            <img src={product1img} alt="Book 1" className='IFMASA-Products' />
            <h3 className='IFMASA-Leadership-subtitle'>Book 1 Title</h3>
            <p>Description of Book 1...</p>
          </div>
          <div>
            <img src={product2img} alt="Book 2" className='IFMASA-Products' />
            <h3 className='IFMASA-Leadership-subtitle'>Book 2 Title</h3>
            <p>Description of Book 2...</p>
          </div>
          <div>
            <img src={product3img} alt="Book 3" className='IFMASA-Products' />
            <h3 className='IFMASA-Leadership-subtitle'>Book 3 Title</h3>
            <p>Description of Book 3...</p>
          </div>
          <div>
            <img src={product4img} alt="Book 4" className='IFMASA-Products' />
            <h3 className='IFMASA-Leadership-subtitle'>Book 4 Title</h3>
            <p>Description of Book 4...</p>
          </div>
        </div>
      </section>
      
      <section>
        <br /><br /> <br /><br />
        <h2 className='IFMASA-Leadership-subtitle'>Investment products of public consumption</h2>
        <p>Explanation of investment products...</p>
        <div>
          <div>
            <img src={investment1img} alt="Investment 1" className='IFMASA-Products' />
            <h3 className='IFMASA-Leadership-subtitle'>Investment 1</h3>
            <p>Description of Investment 1...</p>
          </div>
          <div>
            <img src={investment2img} alt="Investment 2" className='IFMASA-Products' />
            <h3 className='IFMASA-Leadership-subtitle'>Investment 2</h3>
            <p>Description of Investment 2...</p>
          </div>
          <div>
            <img src={investment3img} alt="Investment 3" className='IFMASA-Products' />
            <h3 className='IFMASA-Leadership-subtitle'>Investment 3</h3>
            <p>Description of Investment 3...</p>
          </div>
          <div>
            <img src={investment4img} alt="Investment 4" className='IFMASA-Products' />
            <h3 className='IFMASA-Leadership-subtitle'>Investment 4</h3>
            <p>Description of Investment 4...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prod;
