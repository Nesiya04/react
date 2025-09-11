import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './sarees.css';
import s1 from './assests/s1.jpg';
import s2 from './assests/s2.jpg';
import s3 from './assests/s3.jpg';

function BasicExample() {
  return (
    <div id='sarees'>
    <h1 className='h1'>Sarees</h1>
<div className='container1'>
    <div className='row'>
        <div className='col-md-4'>

    <Card style={{ width: '20rem' }} className='card'> 
      <Card.Img variant="top" src={s1} className='image2'/>
      <Card.Body>
        <Card.Title>Jimmy choo fabric</Card.Title>
        <Card.Text>
          The saree in the appears from the Jimmy choo fabric saree ,possibly featuring a floral pattern.
        </Card.Text>
        <Button variant="primary"  style={{backgroundColor:"#ff4d4d"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-md-4'>

    <Card style={{ width: '20rem' }} className='card'> 
      <Card.Img variant="top" src={s2} className='image2'/>
      <Card.Body>
        <Card.Title>Chiffon saree</Card.Title>
        <Card.Text>
          The chiffon saree is loved for its lightweight, sheer texture and elegant drape. It’s comfortable to wear.
        </Card.Text>

  
        <Button variant="primary"  style={{backgroundColor:"#ff4d4d"}}> Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-4'>

    <Card style={{ width: '20rem' }} className='card'> 
      <Card.Img variant="top" src={s3} className='image2'/>
      <Card.Body>
        <Card.Title>Organza Silk</Card.Title>
        <Card.Text>
          Organza silk sarees are admired for their crisp texture and subtle sheen. They offer a luxurious feel, hold their shape well.
        </Card.Text>
        <Button variant="primary"  style={{backgroundColor:"#ff4d4d"}}>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

</div>
    </div>
    </div>
  );
}

export default BasicExample;