import { useAppSelector } from 'configs/hooks';

import WebRoutes from 'routes/web-routes';

import { getMenuState } from 'reducers/menu-state';

function App() {
  const menuState = useAppSelector(getMenuState);

  return (
    <div className="app">
      <div className="app-container">
        <section className={`main-content ${menuState ? 'opened' : 'closed'}`}>
          <WebRoutes />
        </section>
      </div>
    </div>
  );
}

export default App;
