interface Styles {
  footer: {
    backgroundColor: string;
    color: string;
    padding: string;
    textAlign: React.CSSProperties['textAlign'];
  };
  copyright: {
    margin: number;
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
  };
}

const styles: Styles = {
  footer: {
    backgroundColor: '#f62424',
    color: '#fff',
    padding: '3px 0',
    textAlign: 'center',
  },
  copyright: {
    margin: 0,
    fontFamily: 'Montserrat',
    fontSize: '13px',
    fontWeight: 'bold',
  },
};

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div className="container">
        <p>Doe, isso salva vidas</p>
      </div>
    </footer>
  );
}
