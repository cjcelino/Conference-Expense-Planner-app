import React from 'react';
import Counter from './Counter';
import Navbar from './Navbar';
import './MealsPage.css';
import '../App.css';

interface Meal {
  title: string;
  price: number;
  img: string;
}

interface MealsPageProps {
  meals: Meal[];
  mealCounts: number[];
  setMealCounts: React.Dispatch<React.SetStateAction<number[]>>;
  onNavigate: (page: string) => void;
}

const MealsPage: React.FC<MealsPageProps> = ({
  meals,
  mealCounts,
  setMealCounts,
  onNavigate
}) => {
  const totalMealCost = mealCounts.reduce((sum, count, i) => sum + count * meals[i].price, 0);

  return (
    <div className="page">
      <div className="overlay" />
      <Navbar onNavigate={onNavigate} />
      <div className="page-content">
        <h2>Meal Selection</h2>
        <div className="card-grid">
          {meals.map((meal, i) => (
            <div key={i} className="card">
              <img src={meal.img} alt={meal.title} />
              <h3>{meal.title}</h3>
              <p>${meal.price}</p>
              <Counter
                count={mealCounts[i]}
                onIncrement={() =>
                  setMealCounts(mc => mc.map((c, idx) => (idx === i ? c + 1 : c)))
                }
                onDecrement={() =>
                  setMealCounts(mc => mc.map((c, idx) => (idx === i && c > 0 ? c - 1 : c)))
                }
              />
            </div>
          ))}
        </div>
        <p className="total">Total Cost: ${totalMealCost}</p>
      </div>
    </div>
  );
};

export default MealsPage;
