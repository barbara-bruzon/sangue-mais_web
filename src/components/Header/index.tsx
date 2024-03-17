import HamburguerMenu from "../HamburguerMenu";

const styles = {
  header: {
    backgroundColor: '#f62424',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: '24px',
    color: '#fff',
    fontWeight: 'bold',
    margin: '0 16px',
  },
};

export default function Header() {
  return (
    <header style={styles.header}>
      <HamburguerMenu />
      <h1 style={styles.title}>Sangue</h1>
    </header>
  );
}