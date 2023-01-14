import Logo from '../logo/logo';
import SingIn from '../sing-in/sing-in';
import SingOut from '../sing-out/sing-out';
import {CONTACTS, NAV_PAGES, MY_QUESTS} from '../../const';
import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {useAppSelector} from '../../hooks';

type HeaderProps = {
  location?: string;
}

function Header ({location}: HeaderProps): JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo/>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            {NAV_PAGES.map((item) => {
              if (authorizationStatus !== AuthorizationStatus.Auth && item.title === MY_QUESTS) {
                return (
                  ''
                );
              } else {
                return (
                  <li key = {item.title} className="main-nav__item">
                    <Link to={item.href} className={`link ${item.href === location ? 'active' : ''}` }>{item.title}
                    </Link>
                  </li>
                );
              }
            }
            )}
          </ul>
        </nav>
        <div className="header__side-nav">
          {authorizationStatus === AuthorizationStatus.Auth ? <SingOut/> : <SingIn/>}
          <a className="link header__side-item header__phone-link" href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
