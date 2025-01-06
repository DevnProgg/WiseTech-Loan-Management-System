import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import paths from 'routes/paths';

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = true; // TODO: Implement logic to check if user is logged in or not.
  useEffect(() => {
    console.log("here");
    if (!isLoggedIn) {
      navigate(paths.signin);
    }
    else {
      navigate(paths.dashboard);
    }
  }, [navigate]);

  return <Outlet />;
};

export default App;
