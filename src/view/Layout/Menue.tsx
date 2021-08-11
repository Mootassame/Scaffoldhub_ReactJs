/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import menus from "src/view/menue";
import MenuWrapper from "./styles/MenueWrapper";
import menue from "src/view/menue";
function Menu(props) {
  return (
    <div className='border-end bg-white' id='sidebar-wrapper'>
      <div className='sidebar-heading border-bottom bg-light'>
        Start Bootstrap
      </div>
      <div className='list-group list-group-flush'>
        {menus.map((menue) => (
          <Link to={menue.path}>
            <a
              className='
          list-group-item list-group-item-action list-group-item-light
          p-3
        '>
              {menue.label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;
