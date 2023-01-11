import Logo from '../logo/logo';
import SingIn from '../sing-in/sing-in';
import {PHONE, NAV_PAGES} from '../../const';
// import SingOut from '../sing-out/sing-out';

function Header (): JSX.Element {

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo/>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            {NAV_PAGES.map((item) => (
              <li key = {item.title} className="main-nav__item">
                <a className="link" href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__side-nav">
          <SingIn/>
          <a className="link header__side-item header__phone-link" href={PHONE.phoneLink}>{PHONE.phone}</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
