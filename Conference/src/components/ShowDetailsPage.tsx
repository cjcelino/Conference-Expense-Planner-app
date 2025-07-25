import React from 'react';
import Navbar from './Navbar';
import './ShowDetailsPage.css';
import '../App.css';

interface Item {
  title: string;
  price: number;
  img: string;
}

interface ShowDetailsPageProps {
  venues: (Item & { capacity: number })[];
  addons: Item[];
  meals: Item[];
  venueCounts: number[];
  addonCounts: number[];
  mealCounts: number[];
  onNavigate: (page: string) => void;
}

const ShowDetailsPage: React.FC<ShowDetailsPageProps> = ({
  venues,
  addons,
  meals,
  venueCounts,
  addonCounts,
  mealCounts,
  onNavigate
}) => {
  const calculateTotal = () => {
    const venueTotal = venueCounts.reduce((sum, count, i) => sum + count * venues[i].price, 0);
    const addonTotal = addonCounts.reduce((sum, count, i) => sum + count * addons[i].price, 0);
    const mealTotal = mealCounts.reduce((sum, count, i) => sum + count * meals[i].price, 0);
    return venueTotal + addonTotal + mealTotal;
  };

  const renderItems = (title: string, items: Item[], counts: number[]) => (
    <div className="details-section">
      <h3>{title}</h3>
      <div className="details-grid">
        {items.map((item, i) => (
          counts[i] > 0 && (
            <div key={i} className="details-card">
              <img src={item.img} alt={item.title} />
              <h4>{item.title}</h4>
              <p>Qty: {counts[i]}</p>
              <p>Price: ${item.price}</p>
              <p>Subtotal: ${item.price * counts[i]}</p>
            </div>
          )
        ))}
      </div>
    </div>
  );

  return (
    <div className="page">
      <div className="overlay" />
      <Navbar onNavigate={onNavigate} />
      <div className="page-content">
        <h2>Booking Summary</h2>
        {renderItems('Venues', venues, venueCounts)}
        {renderItems('Add-ons', addons, addonCounts)}
        {renderItems('Meals', meals, mealCounts)}
        <p className="grand-total">Grand Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
};

export default ShowDetailsPage;
