import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 py-6">
      <div className="container mx-auto text-center text-white">
        <p>Create By Manmohan singh | All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/in/manmohan-singh-69078428a/" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Manmohansinghyadav" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/manmohan_yadav10/" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href="https://x.com/MohanYadav2230" className="hover:text-gray-300"><i className="fab fa-x"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
