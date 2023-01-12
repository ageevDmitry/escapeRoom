import HistoryRouter from '../../pages/history-route/history-route';
import {Route, Routes, Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../../pages/private-route/private-route';
import browserHistory from '../../pages/browser-history';
import Main from '../../pages/main/main';
import Quest from '../../pages/quest/quest';
import Contacts from '../../pages/contacts/contacts';
import Login from '../../pages/login/login';
import Booking from '../../pages/booking/booking';
import MyQuests from '../../pages/my-quests/my-quests';
import NotFoundScreen from '../../pages/notFoundScreen/notFoundScreen';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main/>}
        />
        <Route
          path={AppRoute.Quest}
          element={<Quest/>}
        />
        <Route
          path={AppRoute.Contacts}
          element={<Contacts />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Booking}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Booking/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.MyQuests}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyQuests/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFoundScreen />}
        />
        <Route
          path={'*'}
          element={<Navigate to={AppRoute.NotFound} replace />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
