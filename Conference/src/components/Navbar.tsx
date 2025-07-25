import React from 'react';
import './Navbar.css';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <button onClick={() => onNavigate('landing')}>Home</button>
      <button onClick={() => onNavigate('venue')}>Venue</button>
      <button onClick={() => onNavigate('addons')}>Add-ons</button>
      <button onClick={() => onNavigate('meals')}>Meals</button>
      <button onClick={() => onNavigate('details')}>Summary</button>
    </nav>
  );
};

export default Navbar;
