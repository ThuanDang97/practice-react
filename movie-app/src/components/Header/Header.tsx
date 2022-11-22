import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo-blue-short.svg';
import { navHeader } from '../../constants/MockData';
import { Navbar } from '../Navbar/Navbar';

const Header = (): JSX.Element => {
  return (
    <header>
      <Link to="/">
        <h2 className="logo">
          <img src={logo} alt="" />
        </h2>
      </Link>
      <Navbar navItem={navHeader} />
    </header>
  );
};

export { Header };
