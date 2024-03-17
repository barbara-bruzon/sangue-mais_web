import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const Links = [
  { path: "/home", text: "Home" },
];

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '25px',
    height: '18px',
    left: '30px',
    top: '30px',
  },
  bmBurgerBars: {
    background: '#fff',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmMenu: {
    background: '#f62424',
    padding: '2.5em 1.5em',
    fontSize: '1.15rem',
    width: '300px',
  },
  bmMenuAnchor: {
    display: 'block',
    padding: '0.75em 1.5em',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontFamily: 'Montserrat',
  },
};

export default function HamburguerMenu() {
  return (
    <Menu styles={styles}>
      {Links.map((link) => (
        <Link key={link.path} to={link.path} style={styles.bmMenuAnchor}>
          {link.text}
        </Link>
      ))}
    </Menu>
  );
}