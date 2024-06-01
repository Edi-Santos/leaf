import React from 'react';
import { Link } from 'react-router-dom';

import InConstruction from '../../globalComponents/inConstruction/InConstruction';
import './home.css';

function Home() {
  return (
    <section className='home-container'>
      <div>
        <h1>HOME</h1>
        <Link to={'/login'}>LOGIN</Link>
      </div>

      <InConstruction />
    </section>
  );
}

export default Home;
