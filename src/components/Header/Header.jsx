import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const navigate = useNavigate();

  const handleClick= (url) => {
    navigate(url);
  }
  return (
    <header>
      <div className="logo-header">
        <img class="img-logo" src="logo192.png" alt="logo" />
      </div>
      <div calss="menu">
        <ul class="ul-menu">
          <li class="li-menu" onClick={() => { handleClick("/login")}}><a class="link-menu">login</a></li>
          <li class="li-menu" onClick={() => {handleClick("/")}}><a class="link-menu">inicio</a></li>
          <li class="li-menu"><a href="#" class="link-menu">iconos</a></li>
          <li class="li-menu"><a href="#" class="link-menu">tienda</a></li>
          <li class="li-menu"><a href="#" class="link-menu">tienda</a></li>
          <li class="li-menu"><a href="#" class="link-menu">tienda</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;