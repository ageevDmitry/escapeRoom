import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFilterGenreType} from '../../store/quests-ui/quests-ui';
import {getFilterGenreType} from '../../store/quests-ui/selectors';
import {GENRES} from '../../const';

function FilterGenres (): JSX.Element {

  const dispatch = useAppDispatch();
  const filterType = useAppSelector(getFilterGenreType);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Тематика</legend>
      <ul className="filter__list">
        {GENRES.map((item) => (
          <li key = {item.type} className="filter__item"
            onClick={() => {
              dispatch(changeFilterGenreType({type: item.type}));
            }}
          >
            <input type="radio" name="type" id={item.type} checked={filterType === item.type}/>
            <label className="filter__label" htmlFor={item.type}>
              <svg className="filter__icon" width={26} height={30} aria-hidden="true">
                <use xlinkHref={`#icon-${item.svgLink}` }/>
              </svg><span className="filter__label-text">{item.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterGenres;
