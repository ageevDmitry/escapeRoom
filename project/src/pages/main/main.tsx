import Header from '../../components/header/header';
import FilterGenres from '../../components/filter-genre/filter-genre';
import FilterDifficultyLevels from '../../components/filter-level/filter-level';
import QuestCard from '../../components/quest-card/quest-card';
import Footer from '../../components/footer/footer';
// import Loading from '../../components/loading/loading';
// import ContentEmpty from '../../components/content-empty/content-empty';
import {useAppSelector} from '../../hooks';
import {getFilterQuests} from '../../store/quests-ui/selectors';
import {useLocation} from 'react-router-dom';

function Main (): JSX.Element {

  const quests = useAppSelector(getFilterQuests);
  const location = useLocation();

  return (
    <div className="wrapper">
      <Header
        location = {location.pathname}
      />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">Выберите тематику</h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <FilterGenres/>
              <FilterDifficultyLevels/>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {
              quests
                .map((quest) => (
                  <QuestCard
                    key = {quest.id}
                    quest = {quest}
                  />))
            }
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Main;
