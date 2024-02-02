import HomeTemplate from '@/components/templates/HomeTemplate';

const Home = () => {
  const isLogged = !!localStorage.getItem('user');

  return (
    <HomeTemplate isLogged={isLogged} />
  );
};

export default Home;
