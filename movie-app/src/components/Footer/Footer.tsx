import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/logo-footer.svg';
import { navFooter } from '../../constants/MockData';
import { INavbar } from '../../interfaces/Navbar/INav';
import { IItem } from '../../interfaces/Navbar/IItem';

const Footer = (): JSX.Element => {
  const renderNavFooter = (itemNav: INavbar[]): JSX.Element => {
    return (
      <div className="menu_footer">
        {itemNav.map((item) => (
          <div key={item.id} className="nav_footer">
            <h3 className="nav_title">{item.title}</h3>
            <div className="sub_nav">{renderSubNavFooter(item.items)}</div>
          </div>
        ))}
      </div>
    );
  };

  const renderSubNavFooter = (itemSubNav: IItem[]) => {
    return (
      <>
        {itemSubNav.map((item) => (
          <Link to={item.pathItem} key={item.idItem} className="sub_nav_item">
            <span>{item.titleItem}</span>
          </Link>
        ))}
      </>
    );
  };

  return (
    <footer>
      <Link to="/">
        <h2 className="logo_footer">
          <img src={logo} alt="" />
        </h2>
      </Link>
      {renderNavFooter(navFooter)}
    </footer>
  );
};

export default Footer;
