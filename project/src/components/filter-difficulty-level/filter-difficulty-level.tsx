import {DIFFICULTY_LEVELS} from '../../const';

function FilterDifficultyLevels (): JSX.Element {

  return (
    <fieldset className="filter__section">
      <legend className="visually-hidden">Сложность</legend>
      <ul className="filter__list">
        {DIFFICULTY_LEVELS.map((item) => (
          <li key = {item.type} className="filter__item">
            <input type="radio" name="level" id={item.type}/>
            <label className="filter__label" htmlFor={item.type}><span className="filter__label-text">{item.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </fieldset>
  );
}

export default FilterDifficultyLevels;
