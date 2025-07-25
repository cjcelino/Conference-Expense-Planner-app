import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import VenuePage from './components/VenuePage';
import AddonsPage from './components/AddonsPage';
import MealsPage from './components/MealsPage';
import ShowDetailsPage from './components/ShowDetailsPage';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  const [page, setPage] = useState<'landing' | 'venue' | 'addons' | 'meals' | 'details'>('landing');

  const venues = [
    { title: 'Grand Ballroom', 
      price: 500, 
      capacity: 200, 
      img: 'https://passport-cdn.kiwicollection.com/blog/drive/uploads/2021/02/Fairmont-Copley-Grand-Ballroom-694x390.jpg' },
    { title: 'Conference Room A', 
      price: 300, 
      capacity: 100, 
      img: 'https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_v1-scaled.jpg' },
    { title: 'Outdoor Pavilion', 
      price: 400, 
      capacity: 150, 
      img: 'https://lancastercountybackyard.b-cdn.net/wp-content/uploads/fly-images/17622/poolside-timber-frame-pavilion-in-Pottstown-PA-scaled-1600x1600.jpg' }
  ];
  const [venueCounts, setVenueCounts] = useState(Array(venues.length).fill(0));

  const addons = [
    { title: 'Projector & Screen', 
      price: 150, 
      img: 'https://5.imimg.com/data5/SELLER/Default/2023/12/369127335/RC/QN/HM/181526573/led-screen-rental-service-500x500.png' },
    { title: 'Stage Decoration', 
      price: 200, 
      img: 'https://3.bp.blogspot.com/-F4yOBaFVFOg/WnYR7L5DnsI/AAAAAAAAAog/YafA5rvIFBIbjtTT1zkzFqPVpu6GJogygCLcBGAs/s1600/2.jpg' },
    { title: 'Sound System', 
      price: 250, 
      img: 'https://geon.com.my/wp-content/uploads/2021/03/Audio-Conference.png' }
  ];
  const [addonCounts, setAddonCounts] = useState(Array(addons.length).fill(0));

  const meals = [
    { title: 'Breakfast', 
      price: 10, 
      img: 'https://copinettenyc.com/wp-content/uploads/2024/04/DSC00542-684x1024.jpg' },
    { title: 'Lunch', 
      price: 15, 
      img: 'https://i.pinimg.com/originals/74/a3/9b/74a39b06b161f1090729695d151df102.jpg' },
    { title: 'Dinner', 
      price: 20, 
      img: 'https://www.architecture.com/-/media/819bc5e40cb840ff91f5391753b9b081.jpg' }
  ];
  const [mealCounts, setMealCounts] = useState(Array(meals.length).fill(0));

  const commonLayout = (Component: React.ReactNode) => (
    <>
      <Navbar onNavigate={setPage} />
      <div className="page-container">
        {Component}
      </div>
    </>
  );

  switch (page) {
    case 'landing':
      return <LandingPage onStart={() => setPage('venue')} />;

    case 'venue':
      return commonLayout(
        <VenuePage
          venues={venues}
          venueCounts={venueCounts}
          setVenueCounts={setVenueCounts}
          onNavigate={setPage}
        />
      );

    case 'addons':
      return commonLayout(
        <AddonsPage
          addons={addons}
          addonCounts={addonCounts}
          setAddonCounts={setAddonCounts}
          onNavigate={setPage}
        />
      );

    case 'meals':
      return commonLayout(
        <MealsPage
          meals={meals}
          mealCounts={mealCounts}
          setMealCounts={setMealCounts}
          onNavigate={setPage}
        />
      );

    case 'details':
      return commonLayout(
        <ShowDetailsPage
          venues={venues}
          addons={addons}
          venueCounts={venueCounts}
          addonCounts={addonCounts}
          meals={meals}
          mealCounts={mealCounts}
          onNavigate={setPage}
        />
      );

    default:
      return null;
  }
};

export default App;
