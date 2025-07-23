import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-amazon">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>Get to Know Me</h4>
          <ul>
            <li>Chinthala Subhash</li>
            <li>Developer</li>
            <li>Problem Solver</li>
            <li>Tech Enthusiast</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Info</h4>
          <ul>
            <li>Email: <a href="mailto:subhashchinthala7@gmail.com">subhashchinthala7@gmail.com</a></li>
            <li>Phone: <a href="tel:+919014406841">+91 9014406841</a></li>
            <li>Address: AVS FASHION STORE, Allagadda</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <p>© {new Date().getFullYear()} Chinthala Subhash • All rights reserved</p>
      </div>
    </footer>
  );
}
