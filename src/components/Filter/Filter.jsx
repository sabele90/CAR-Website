
import './Filter.css'

const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className='containerSelect'>
      <div className="select">
      <select id="priceFilter" value={filter} onChange={handleFilterChange}>
        <option selected value="default">Filtrar por precio</option>
        <option value="all">Todos</option>
        <option value="cheap">Menor a 20,000</option>
        <option value="standard">Entre 20,000 y 40,000</option>
        <option value="luxury">Mayor a 40,000</option>
      </select>
    </div>
    </div>
  );
};

export default Filter

  
  
  
  
  







