import React from 'react';
import '../styles.css';


const Contact: React.FC = () => {
  return (
    <section className="temp contact" id="contact">
          <h1>Contact Me</h1>
          <div className="contacts">
            <div>
              <p>Email: arodabough@hotmail.com</p>
              <p>Phone: +1 (425) 677-5928</p>
            </div>
            <a className='btn' href="https://www.linkedin.com/in/andrew-rodabough-6b0795346" target="_blank" >Linkedin</a>
            <a className='btn' href="https://www.github.com/AndrewRodabough" target="_blank" >GitHub</a>
          </div>
    </section>
  );
};

export default Contact;