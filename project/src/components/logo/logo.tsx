import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import LogoSvg from '../logo-svg/logo-svg';

function Logo (): JSX.Element {

  const location = useLocation();

  return (
    <span className="logo header__logo">
      {(location.pathname === AppRoute.Main) ?
        <LogoSvg/> :
        <Link to={AppRoute.Main}>
          <LogoSvg/>
        </Link>}
    </span>
  );
}

export default Logo;
