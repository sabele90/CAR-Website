
import './Header.css'

function Header(props) {
    return (
      
      <div className="header"><h1 className="neon">{props.title}</h1>
      <img src= 'logo.jpg' alt='logo' className="logo" />
      </div>
    )
  }
  
  export default Header