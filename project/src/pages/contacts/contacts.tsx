import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Map from '../../components/map/map';
import {CONTACTS} from '../../const';
import {useLocation} from 'react-router-dom';

function Contacts (): JSX.Element {

  const location = useLocation();

  return (
    <div className="wrapper">
      <Header
        location = {location.pathname}
      />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" alt="" width={1366} height={1959} />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper page-content__title-wrapper--underlined">
            <p className="subtitle page-content__subtitle">квесты в&nbsp;Санкт-Петербурге
            </p>
            <h1 className="title title--size-m page-content__title">Контакты</h1>
          </div>
          <div className="contacts">
            <dl className="contacts__list">
              <div className="contacts__item">
                <dt className="contacts__dt">Адрес</dt>
                <dd className="contacts__dd">
                  <address className="contacts__address">{CONTACTS.address}</address>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Режим работы</dt>
                <dd className="contacts__dd">{CONTACTS.mode}</dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">Телефон</dt>
                <dd className="contacts__dd">
                  <a className="link" href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
                </dd>
              </div>
              <div className="contacts__item">
                <dt className="contacts__dt">E–mail</dt>
                <dd className="contacts__dd">
                  <a className="link" href={CONTACTS.mailHref}>{CONTACTS.mail}</a>
                </dd>
              </div>
            </dl>
            <div className="contacts__map">
              <Map/>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Contacts;
