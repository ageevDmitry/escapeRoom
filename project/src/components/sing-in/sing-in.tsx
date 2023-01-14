import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';


function SingIn (): JSX.Element {

  return (
    <Link
      to={AppRoute.Login}
      className="btn header__side-item header__login-btn"
    >Вход
    </Link>
  );
}

export default SingIn;
