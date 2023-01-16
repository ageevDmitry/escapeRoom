import {Quest} from '../../types/quest';
import {VIEW_QUEST_LEVEL} from '../../const';
import {Link} from 'react-router-dom';

type QuestCardProps = {
  typeComponent?: boolean;
  quest: Quest;
}

function QuestCard ({quest, typeComponent}:QuestCardProps): JSX.Element {

  const {id, title, previewImg, previewImgWebp, level, peopleMinMax} = quest;
  const questCardId = `/quest/${id}`;

  return (
    <Link to = {questCardId}>
      <div className="quest-card">
        <div className="quest-card__img">
          <picture>
            <source type="image/webp" srcSet={previewImgWebp}/>
            <img src={previewImg} alt="/" width={344} height={232} />
          </picture>
        </div>
        <div className="quest-card__content">
          <div className="quest-card__info-wrapper">{title}
            {typeComponent && <span className="quest-card__info">[завтра,&nbsp;20:00. наб. реки Карповки&nbsp;5, лит&nbsp;П<br/>м. Петроградская]</span>}
          </div>
          <ul className="tags quest-card__tags">
            <li className="tags__item">
              <svg width={11} height={14} aria-hidden="true">
                <use xlinkHref="#icon-person" />
              </svg>{peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width={14} height={14} aria-hidden="true">
                <use xlinkHref="#icon-level" />
              </svg>{VIEW_QUEST_LEVEL[level]}
            </li>
          </ul>
          {typeComponent && <button className="btn btn--accent btn--secondary quest-card__btn" type="button">Отменить</button>}
        </div>
      </div>
    </Link>
  );
}

export default QuestCard;
