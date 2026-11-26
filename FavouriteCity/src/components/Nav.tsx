import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'active' : '';

function Nav() {
  return (
    <nav>
      <NavLink to="/" className={setActive}>
        Інформація про місто
      </NavLink>

      <NavLink to="/places/first" className={setActive}>
        Перлина міста
      </NavLink>

      <NavLink to="/places/other" className={setActive}>
        Інші цікаві місця
      </NavLink>

      <NavLink to="/Galery" className={setActive}>
        Галерея
      </NavLink>
    </nav>
  );
}

export default Nav;