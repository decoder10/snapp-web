import Auth from 'Auth';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'configs/store';

import 'assets/styles/web.scss';
import { MemoizedLoader } from 'statics/statics';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth />
    </BrowserRouter>

    <MemoizedLoader />
  </Provider>,
);
