import Car from '../Car/Car'
import './CarList.css'

function CarList({ filteredCars }) {
  return (
    <div className="containerCarList">
      <div className="carList">
        {filteredCars.map((car, i) => (
          <Car key={i} car={car} />
        ))}
      </div>
    </div>
  )
}

export default CarList
