import React  from 'react';
import './Header.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';




const Header = () => {

  
  return (
    <>
    <div className="shadow-box">
      <h1 className='animated-text'>"रक्तदान करें, जीवन रक्षक बनें"</h1>
     
  <h2 className='home-h2'>"Welcome to BloodBridge, where saving lives begins with you.<br/> Join us in our mission to make a difference through blood donation."</h2>
        <div className="button-container">
          <Link to="/donor">
          <button className="button">Donor</button>
          </Link>
          

          <Link to="/reciever">
          <button className="button">Reciever</button>
          </Link>
          
          
         
          
        </div>
<h3>@Connect with Donor in Real time</h3>
       
    </div>
    
     
     </>
  );
}

export default Header;