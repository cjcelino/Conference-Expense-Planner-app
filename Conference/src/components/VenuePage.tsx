import React from 'react';
import './VenuePage.css';
import Navbar from './Navbar';

interface Venue {
  title: string;
  price: number;
  capacity: number;
  img: string;
}

interface VenuePageProps {
  venues: Venue[];
  venueCounts: number[];
  setVenueCounts: React.Dispatch<React.SetStateAction<number[]>>;
  onNavigate: (page: string) => void;
}

const VenuePage: React.FC<VenuePageProps> = ({
  venues,
  venueCounts,
  setVenueCounts,
  onNavigate
}) => {
  const handleIncrement = (index: number) => {
    const updated = [...venueCounts];
    updated[index]++;
    setVenueCounts(updated);
  };

  const handleDecrement = (index: number) => {
    const updated = [...venueCounts];
    if (updated[index] > 0) updated[index]--;
    setVenueCounts(updated);
  };

  const totalVenueCost = venueCounts.reduce((sum, count, i) => sum + count * venues[i].price, 0);

  return (
    <div className="venue-background">
      <div className="venue-overlay" />
      <Navbar onNavigate={onNavigate} />
      <div className="venue-content">
        <h2>Venue Room Selection</h2>
        <div className="venue-grid">
          {venues.map((venue, index) => (
            <div key={index} className="venue-card">
              <img src={venue.img} alt={venue.title} />
              <h3>{venue.title}</h3>
              <p>Capacity: {venue.capacity}</p>
              <p>Price: ₱{venue.price}</p>
              <div className="counter">
                <button onClick={() => handleDecrement(index)}>-</button>
                <span>{venueCounts[index]}</span>
                <button onClick={() => handleIncrement(index)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <p className="venue-total">Total Cost: ₱{totalVenueCost}</p>
      </div>
    </div>
  );
};

export default VenuePage;
