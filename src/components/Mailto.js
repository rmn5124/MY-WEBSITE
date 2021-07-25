import React from 'react';
import { Link } from 'react-router-dom';

const Mailto = ({ mail, label }) => (
  <Link
    to="#"
    onClick={(e) => {
      window.location = mail;
      e.preventDefault();
    }}
  >
    {label}
  </Link>
);

export default Mailto;
