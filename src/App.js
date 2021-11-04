import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import { useRoutes } from './routes';

function App() {
  const isAuthFromState = useSelector((state) => state.authentication.isAuth);
  // eslint-disable-next-line
  const isAuth = useSelector((state) => state.authentication.isAuth) || sessionStorage.getItem('isAuth');
  const routes = useRoutes(!!isAuth);

  console.log('isAuthFromState', isAuthFromState);

  console.log('isAuth', !!isAuth);
  return (
  // eslint-disable-next-line
  <div className="App">
    <Router>
      <Header isAuth={!!isAuth} />
      <main className="main">{routes}</main>
    </Router>
  </div>
  );
}

export default App;
