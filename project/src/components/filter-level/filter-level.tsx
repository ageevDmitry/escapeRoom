import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeFilterLevelType} from '../../store/quests-ui/quests-ui';
import {getFilterLevelType} from '../../store/quests-ui/selectors';
import {LEVELS} from '../../const';

function FilterDifficultyLevels (): JSX.Element {

  const dispatch = useAppDispatch();
  const filterType = useAppSelector(getFilterLevelType);

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {LEVELS.map((item) => (
          <li key = {item.type} className="filter__item"
            onClick={() => {
              dispatch(changeFilterLevelType({type: item.type}));
            }}
          >
            <input type="radio" name="level" id={item.type} checked={filterType === item.type}/>
            <label className="filter__label" htmlFor={item.type}><span className="filter__label-text">{item.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterDifficultyLevels;
