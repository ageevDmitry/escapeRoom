import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Map from '../../components/map/map';
import FormBooking from '../../components/form-booking/form-booking';
import {useParams} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {fetchQuestBookingAction} from '../../store/api-action';
import {getQuestBooking} from '../../store/quests-data/selectors';
import {useEffect} from 'react';

function Booking (): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();
  const questBooking = useAppSelector(getQuestBooking);

  useEffect(() => {
    if (id) {
      dispatch(fetchQuestBookingAction(id));
    }
  }, [id, dispatch]);

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source type="image/webp" srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-bg-size-m.jpg" srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x" alt="" width={1366} height={1959} />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">Маньяк</p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <Map/>
              <p className="booking-map__address">Вы&nbsp;выбрали: наб. реки Карповки&nbsp;5, лит&nbsp;П, м. Петроградская</p>
            </div>
          </div>
          <FormBooking
            questBooking = {questBooking}
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Booking;
