import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import QuestCardReservation from '../../components/quest-card-reservation/quest-card-reservation';
import {useAppSelector} from '../../hooks';
import {getQuestsReservation} from '../../store/quests-data/selectors';
import {useLocation} from 'react-router-dom';
import ContentEmpty from '../../components/content-empty/content-empty';

function MyQuests (): JSX.Element {

  const questReservation = useAppSelector(getQuestsReservation);
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
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">Мои бронирования</h1>
          </div>
          <div className="cards-grid">
            {(questReservation?.length === 0) ?
              <ContentEmpty/> :
              questReservation
                .map((quest) => (
                  <QuestCardReservation
                    key = {quest.id}
                    quest = {quest}
                  />))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default MyQuests;
