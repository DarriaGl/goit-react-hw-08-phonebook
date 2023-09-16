const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    minWidth: 'calc(50vw - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 700,
    fontSize: 40,
    textAlign: 'center',
    color: 'olive',
  },
};

const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Welcome to Phonebook!</h1>
  </div>
);

export default Home;
