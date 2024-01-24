import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen w-screen">
      <Outlet />
    </div>
  );
}

export default Home;
