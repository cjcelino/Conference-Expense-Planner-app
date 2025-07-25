import React from 'react';
import Counter from './Counter';
import Navbar from './Navbar'; 
import './AddonsPage.css';

interface Addon {
  title: string;
  price: number;
  img: string;
}

interface AddonsPageProps {
  addons: Addon[];
  addonCounts: number[];
  setAddonCounts: React.Dispatch<React.SetStateAction<number[]>>;
  onNavigate: (page: string) => void;
}

const AddonsPage: React.FC<AddonsPageProps> = ({
  addons,
  addonCounts,
  setAddonCounts,
  onNavigate
}) => {
  const totalAddonCost = addonCounts.reduce(
    (sum, count, i) => sum + count * addons[i].price,
    0
  );

  return (
    <div className="addons-container">
      <div className="overlay" />
      <Navbar onNavigate={onNavigate} />
      <div className="addons-content">
        <h2>Select Add-ons</h2>
        <div className="addons-grid">
          {addons.map((addon, i) => (
            <div key={i} className="addons-card">
              <img src={addon.img} alt={addon.title} />
              <h3>{addon.title}</h3>
              <p>Price: ${addon.price}</p>
              <Counter
                count={addonCounts[i]}
                onIncrement={() =>
                  setAddonCounts(ac =>
                    ac.map((c, idx) => (idx === i ? c + 1 : c))
                  )
                }
                onDecrement={() =>
                  setAddonCounts(ac =>
                    ac.map((c, idx) => (idx === i && c > 0 ? c - 1 : c))
                  )
                }
              />
            </div>
          ))}
        </div>
        <p className="total">Total Add-on Cost: ${totalAddonCost}</p>
      </div>
    </div>
  );
};

export default AddonsPage;
