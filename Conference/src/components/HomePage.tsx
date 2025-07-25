import React from 'react';
import './HomePage.css';

interface HomePageProps {
  onStart: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ onStart }) => {
  return (
    <div className="home-container">
      <div className="overlay" />
      <div className="home-content">
        <div className="left-section">
          <h1>Conference Expense Planner</h1>
          <p>Plan your next major event with us!</p>
          <button onClick={onStart}>Get Started</button>
        </div>
        <div className="right-section">
          <p><strong>Welcome to BudgetEase Solutions</strong>, your trusted partner in simplifying budget management and financial solutions. At BudgetEase, we understand the importance of effective budget planning and strive to provide intuitive, user-friendly solutions to meet the diverse needs of our clients.</p>
          <p>With a commitment to efficiency and innovation, we empower individuals and businesses to take control of their finances and achieve their goals with ease.</p>
          <p>At BudgetEase Solutions, our mission is to make budgeting effortless and accessible for everyone.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
