import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <section className='Credits'>
        Designed and built by {'- '} 
        <a className='Names'>
          Jatin Sethi | Neelansh Raghav | Prajjwal Sharma
        </a>
      </section>
    </footer>
  );
};

export default Footer;
