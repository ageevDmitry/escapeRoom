import Header from '../../components/header/header';
import FilterGenres from '../../components/filter-genres/filter-genres';
import FilterDifficultyLevels from '../../components/filter-difficulty-level/filter-difficulty-level';
import QuestCard from '../../components/quest-card/quest-card';
import Footer from '../../components/footer/footer';
// import Loading from '../../components/loading/loading';
// import ContentEmpty from '../../components/content-empty/content-empty';
import {useAppSelector} from '../../hooks';
import {getQuests} from '../../store/quests-data/selectors';

function Main (): JSX.Element {

  const quests = useAppSelector(getQuests);

  return (
    <div className="wrapper">
      <Header/>
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
