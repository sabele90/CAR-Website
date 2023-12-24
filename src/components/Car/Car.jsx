import './Car.css'

function Car(props) {


  return (
    <div className="eachCar">
  
      <h2 className='title'>{props.car.maker} {props.car.model}</h2>
      {props.car.year >= 2009 && <img src= 'new.png' alt='etiqueta' className="newImage" />}
      <img src={`/images/${props.car.id}.jpg`} className="eachCarImage"/>
      <p><strong>Year :</strong> {props.car.year}</p>
      <p><strong>Country :</strong> {props.car.country}</p>
      <p><strong>Price :</strong> {props.car.price.replace(/(\d+)\,(\d{2})$/, '$1')}</p>
      <p><strong>Vin :</strong> {props.car.car_vin}</p>
  
         
    </div>
  )
}

export default Car


