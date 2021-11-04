import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../Button/Button';

// eslint-disable-next-line react/prop-types
export default function Header({ isAuth }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOutHandler = () => {
    console.log('logOutHandler clicked');
    dispatch({ type: 'LOG_OUT' });
    history.push('/login');
    // eslint-disable-next-line no-undef
    sessionStorage.removeItem('isAuth');
    // eslint-disable-next-line no-undef
    window.location.reload();
  };

  return (
    <div style={{
      padding: '20px',
      height: '100px',
      width: '100%',
      backgroundColor: '#ABCDAB',
      position: 'relative',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      alignItems: 'center',
    }}
    >
      <h1 style={{
        padding: 0,
        margin: 0,
      }}
      >
        Bridge
      </h1>
      {isAuth && <Button text="SignOut" type="logout" onClick={logOutHandler} />}
    </div>
  );
}
