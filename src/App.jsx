import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import cars from './cars.json';
import CarList from './components/CarList/CarList';
import Filter from './components/Filter/Filter'

function App() {
  const [title] = useState('Reboot Car Store');
  const [filter, setFilter] = useState('default');

  // Define la función de filtro y los autos filtrados
  const filterCars = (filter) => {
    switch (filter) {
      case 'cheap':
        return cars.filter((car) => parseFloat(car.price.replace('€', '')) < 20000);
      case 'standard':
        return cars.filter(
          (car) => parseFloat(car.price.replace('€', '')) >= 20000 &&
            parseFloat(car.price.replace('€', '')) <= 40000
        );
      case 'luxury':
        return cars.filter((car) => parseFloat(car.price.replace('€', '')) > 40000);
      default:
        return cars
    }
  };

  const filteredCars = filterCars(filter);

  return (
    <>
      <Header title={title} />
      <Filter filter={filter} setFilter={setFilter} />
      <CarList filteredCars={filteredCars} />
      <Footer title={title} />
    </>
  );
}

export default App;
