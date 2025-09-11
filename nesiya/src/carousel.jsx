import Carousel from 'react-bootstrap/Carousel';
import  './carousel.css';
import h1 from './assests/h1.jpg';
import h2 from './assests/h2.jpg';
import home3 from './assests/home3.jpg';
import home4 from './assests/home4.jpg';
import k5 from './assests/k5.jpg';

function DarkVariantExample() {
    
  return (

 <div id='home'>
    
     <div style={{overflow:'hidden'}}>
      <Carousel data-bs-theme="dark" className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={h1}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h5>Women's Western</h5>
          <p>Aurelia Fashion Women's collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={h2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Men's Fashion</h5>
          <p>Aurelia Fashion Men's collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
      

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home3}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Beauty Products</h5>
          <p>Aurelia Beauty Products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={home4}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Perfume</h5>
          <p>Aurelia Luxury Perfume collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={k5}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Kids cloths</h5>
          <p>Aurelia kids fashion collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    </div>
  );
}

export default DarkVariantExample;