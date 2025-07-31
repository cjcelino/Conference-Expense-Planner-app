import React, { useState } from 'react';
import HomePage from './components/HomePage';
import VenuePage from './components/VenuePage';
import AddonsPage from './components/AddonsPage';
import MealsPage from './components/MealsPage';
import ShowDetailsPage from './components/ShowDetailsPage';
import Navbar from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'venue' | 'addons' | 'meals' | 'details'>('home');

  const venues = [
    {
      title: 'Large Meeting Room',
      price: 1500,
      capacity: 50,
      img: 'https://i.pinimg.com/originals/8d/c0/6e/8dc06e02a176fbb2366d50d7f14ddce2.jpg',
    },
    {
      title: 'Auditorium Hall',
      price: 2000,
      capacity: 200,
      img: 'https://rulonco.com/wp-content/uploads/2022/04/Chisolm-Trail-HS-1-scaled.jpg',
    },
    {
      title: 'Conference Room',
      price: 1300,
      capacity: 80,
      img: 'https://www.wework.com/ideas/wp-content/uploads/sites/4/2021/08/20201008-199WaterSt-2_v1-scaled.jpg',
    },
    {
      title: 'Small Meeting Room',
      price: 500,
      capacity: 10,
      img: 'https://en.idei.club/uploads/posts/2023-08/1691098610_en-idei-club-p-small-meeting-room-design-ideas-dizain-kra-2.jpg',
    },
  ];
  const [venueCounts, setVenueCounts] = useState(Array(venues.length).fill(0));

  const addons = [
    {
      title: 'Whiteboards',
      price: 110,
      img: 'https://image.shutterstock.com/image-photo/male-adult-man-suit-standing-260nw-530759449.jpg',
    },
     {
      title: 'Projector & Screen',
      price: 150,
      img: 'https://5.imimg.com/data5/SELLER/Default/2023/12/369127335/RC/QN/HM/181526573/led-screen-rental-service-500x500.png',
    },
    {
      title: 'Signage',
      price: 50,
      img: 'https://cts.graphics/wp-content/uploads/2016/07/conference-sign.jpg',
    },
    {
      title: 'Sound System',
      price: 250,
      img: 'https://geon.com.my/wp-content/uploads/2021/03/Audio-Conference.png',
    },
  ];
  const [addonCounts, setAddonCounts] = useState(Array(addons.length).fill(0));

  const meals = [
    {
      title: 'Breakfast',
      price: 50,
      img: 'https://copinettenyc.com/wp-content/uploads/2024/04/DSC00542-684x1024.jpg',
    },
    {
      title: 'Snacks',
      price: 10,
      img: 'https://png.pngtree.com/background/20230613/original/pngtree-various-snack-food-and-snack-foods-picture-image_3379345.jpg',
    },
    {
      title: 'Lunch',
      price: 200,
      img: 'https://i.pinimg.com/originals/74/a3/9b/74a39b06b161f1090729695d151df102.jpg',
    },
    {
      title: 'Dinner',
      price: 150,
      img: 'https://www.architecture.com/-/media/819bc5e40cb840ff91f5391753b9b081.jpg',
    },
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
    case 'home':
      return <HomePage onStart={() => setPage('venue')} />;

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
