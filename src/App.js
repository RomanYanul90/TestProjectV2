import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import { useRoutes } from './routes';

function App() {
  const isAuth = useSelector((state) => state.authentication.isAuth);
  const balance = useSelector((state) => state.balance.points);
  const routes = useRoutes(!!isAuth);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Router>
        <Header isAuth={!!isAuth} />
        {isAuth && <h1>{`Your points: ${balance}`}</h1>}
        <main className="main">{routes}</main>
      </Router>
    </div>
  );
}

export default App;
